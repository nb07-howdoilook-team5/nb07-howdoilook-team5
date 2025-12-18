import { prisma, throwHttpError } from "./prisma/prisma.js";

export const create = (createData) =>
  throwHttpError(prisma.style.create, {
    data: { createData },
  });

export const update = (styleId, password, updateData) =>
  throwHttpError(prisma.style.update, {
    where: {
      id: styleId,
      password: password,
    },
    data: updateData,
  });

export const remove = (styleId, password) =>
  throwHttpError(prisma.style.delete, {
    where: {
      id: styleId,
      password: password,
    },
  });

export const detail = (styleId) =>
  throwHttpError(prisma.style.findUnique, {
    where: { id: styleId },
    include: { _count: { select: { curation: true } } },
  });

export const list = (searchBy, keyword, sortBy, skip, limit) => {
  const where = {};
  const searchByStylenickname = "nickname";
  const searchByStyletitle = "title";
  const searchByStylecontent = "content";
  const searchByStyletag = "tag";

  if (keyword) {
    switch (searchBy) {
      case searchByStylenickname:
        where.nickname = { contains: keyword };
        break;
      case searchByStylecontent:
        where.description = { contains: keyword };
        break;
      case searchByStyletitle:
        where.title = { contains: keyword };
        break;
      case searchByStyletag:
        const keywordArray = keyword.split(",").map((item) => item.trim());
        where.tags = { hasSome: keywordArray };
        break;
      default:
        throw new InternalServerError(`Invalid searchBy: ${searchBy}`);
    }
  }

  const orderByArr = [];
  if (sortBy === "latest") {
    orderByArr.push({ created_at: "desc" });
  } else if (sortBy === "mostViewed") {
    orderByArr.push({ viewCount: "desc" });
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
          _count: {
            select: { curations: true },
            orderBy: { created_at: "desc" },
          },
        },
      }),
    ])
    .then(([totalItemCount, entities]) => ({ totalItemCount, entities }));
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
      rankInfo: {
        ranking: 0,
        rating: score,
      },
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
      const styleEntity = styleMap.get(item.style_id.toString());
      if (!styleEntity) return null;

      return {
        ...styleEntity,
        curationCount: item.curationCount,
        rankInfo: {
          ranking: startIndex + index + 1,
          rating: item.score,
        },
      };
    })
    .filter(Boolean);

  return { totalItemCount, entities: result };
};
