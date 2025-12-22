import { Style } from "../domain/style.js";
import { prisma, throwHttpError } from "./prisma/prisma.js";
import { RankingStyle } from "../controller/models.js";

export const create = (createData) => {
  const { content, ...rest } = createData;
  return throwHttpError(prisma.style.create, {
    data: {
      ...rest,
      description: content,
      style_count: {
        create: {
          view_count: 0,
        },
      },
    },
  }).then(Style.fromEntity);
};

export const update = (styleId, password, updateData) => {
  const { content, ...rest } = updateData;
  return throwHttpError(prisma.style.update, {
    where: {
      id: styleId,
      password: password,
    },
    data: {
      ...rest,
      description: content,
    },
  }).then(Style.fromEntity);
};

export const remove = (styleId, password) =>
  throwHttpError(prisma.style.delete, {
    where: {
      id: styleId,
      password: password,
    },
  }).then(Style.fromEntity);

export const detail = (styleId) =>
  throwHttpError(() =>
    prisma.style.update({
      where: { id: styleId },
      data: {
        style_count: {
          update: {
            view_count: { increment: 1 },
          },
        },
      },
    })
  ).then(Style.fromEntity);

export const list = (searchBy, keyword, sortBy, skip, limit) => {
  const where = {};

  if (keyword) {
    switch (searchBy) {
      case "nickname":
        where.nickname = { contains: keyword };
        break;
      case "content":
        where.description = { contains: keyword };
        break;
      case "title":
        where.title = { contains: keyword };
        break;
      case "tag":
        const keywordArray = keyword.split(",").map((item) => item.trim());
        where.tags = { hasSome: keywordArray };
        break;
    }
  }

  const orderByArr = [];
  if (sortBy === "latest") {
    orderByArr.push({ created_at: "desc" });
  } else if (sortBy === "mostViewed") {
    orderByArr.push({ style_count: { view_count: "desc" } });
  } else if (sortBy === "mostCurated") {
    orderByArr.push({ curations: { _count: "desc" } });
  }

  // 정렬 조건이 없을 경우 기본 정렬 추가 (예: 최신순)
  orderByArr.push({ id: "asc" }); // 또는 { createdAt: "desc" }

  return prisma
    .$transaction([
      prisma.style.count({ where }),
      prisma.style.findMany({
        where,
        skip: skip,
        take: limit,
        orderBy: orderByArr,
        include: {
          style_count: true,
          _count: {
            select: { curations: true },
          },
        },
      }),
    ])
    .then(([totalItemCount, entities]) => ({
      totalItemCount,
      styles: entities.map(Style.fromEntity),
    }));
};

export const ranking = async (rankBy, page, take) => {
  const aggregations = await prisma.curation.groupBy({
    by: ["style_id"],
    _avg: {
      trendy: true,
      personality: true,
      practicality: true,
      cost_effectiveness: true,
    },
    _count: {
      _all: true,
    },
  });

  const scoredStyles = aggregations.map((agg) => {
    const stats = agg._avg;
    let score = 0;
    const trendy = stats.trendy || 0;
    const personality = stats.personality || 0;
    const practicality = stats.practicality || 0;
    const costEffectiveness = stats.cost_effectiveness || 0;

    switch (rankBy) {
      case "trendy":
        score = trendy;
        break;
      case "personality":
        score = personality;
        break;
      case "practicality":
        score = practicality;
        break;
      case "costEffectiveness":
        score = costEffectiveness;
        break;
      case "total":
      default:
        score = (trendy + personality + practicality + costEffectiveness) / 4;
        break;
    }
    return {
      styleId: agg.style_id,
      score: score,
      curationCount: agg._count._all,
    };
  });
  scoredStyles.sort((a, b) => b.score - a.score);
  const totalItemCount = scoredStyles.length;
  const startIndex = (page - 1) * take;
  const pagedItems = scoredStyles.slice(startIndex, startIndex + take);

  const styleIds = pagedItems.map((item) => item.styleId);
  const styles = await prisma.style.findMany({
    where: {
      id: {
        in: styleIds,
      },
    },
  });
  const styleMap = new Map(styles.map((s) => [s.id.toString(), s]));

  const result = pagedItems
    .map((item, index) => {
      const entity = styleMap.get(item.styleId.toString());
      if (!entity) return null;

      return new RankingStyle(
        entity.id.toString(),
        entity.image_urls?.[0] || "",
        entity.tags,
        entity.title,
        entity.nickname,
        entity.viewCount || 0,
        item.curationCount,
        entity.categories || {},
        startIndex + index + 1,
        Number(item.score).toFixed(1)
      );
    })
    .filter(Boolean);

  return { totalItemCount, rankedStyles: result };
};
