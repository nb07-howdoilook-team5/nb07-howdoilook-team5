// ... 상단 import는 유지 ...
import { Style } from "../domain/style.js";
import { prisma, throwHttpError } from "./prisma/prisma.js";
import { RankingStyle } from "../controller/models.js";
import { ForbiddenError, NotFoundError } from "../error/errors.js";

// create, update, remove, list 함수는 기존과 동일하게 두거나 이전 답변 참고

export const create = (createData) => {
  const { content, tags = [], imageUrls, ...rest } = createData;
  return throwHttpError(() =>
    prisma.style.create({
      data: {
        ...rest,
        description: content,
        image_urls: imageUrls,
        style_count: {
          create: { view_count: 0 },
        },
        style_tags: {
          create: tags.map((tagName) => ({
            tag: {
              connectOrCreate: {
                where: { name: tagName },
                create: { name: tagName },
              },
            },
          })),
        },
      },
      include: {
        style_tags: { include: { tag: true } },
        style_count: true,
      },
    })
  ).then(Style.fromEntity);
};

export const update = async (styleId, password, updateData) => {
  const style = await prisma.style.findUnique({
    where: { id: BigInt(styleId) },
    include: { style_count: true },
  });

  if (!style) {
    throw new NotFoundError("스타일을 찾을 수 없습니다.");
  }

  if (style.password !== password) {
    throw new ForbiddenError("비밀번호가 일치하지 않습니다.");
  }

  const { content, title, tags = [], imageUrls, categories } = updateData;

  return throwHttpError(async () => {
    const updatedStyle = await prisma.style.update({
      where: { id: BigInt(styleId) },
      data: {
        title,
        description: content,
        image_urls: imageUrls,
        categories,
        updated_at: new Date(),
        style_tags: {
          deleteMany: {},
          create: tags.map((tagName) => ({
            tag: {
              connectOrCreate: {
                where: { name: tagName },
                create: { name: tagName },
              },
            },
          })),
        },
      },
      include: {
        style_tags: { include: { tag: true } },
      },
    });

    return {
      ...updatedStyle,
      style_count: style.style_count,
    };
  }).then(Style.fromEntity);
};

export const remove = async (styleId, password) => {
  const style = await prisma.style.findUnique({
    where: { id: BigInt(styleId) },
  });
  if (!style) {
    throw new NotFoundError("스타일을 찾을 수 없습니다.");
  }
  if (style.password !== password) {
    throw new ForbiddenError("비밀번호가 일치하지 않습니다.");
  }

  return throwHttpError(() =>
    prisma.style.delete({
      where: { id: BigInt(styleId) },
    })
  ).then(Style.fromEntity);
};

// 수정됨: detail 함수 BigInt 적용
export const detail = async (styleId) => {
  return throwHttpError(async () => {
    const style = await prisma.style.findUnique({
      where: { id: BigInt(styleId) },
    });

    if (!style) throw new NotFoundError();

    await prisma.style_count.update({
      where: { id: style.style_count_id },
      data: { view_count: { increment: 1 } },
    });

    return prisma.style.findUnique({
      where: { id: BigInt(styleId) },
      include: {
        style_count: true,
        _count: { select: { curations: true } },
        style_tags: { include: { tag: true } },
      },
    });
  }).then(Style.fromEntity);
};

export const list = (searchBy, keyword, sortBy, skip, limit) => {
  const where = {};
  if (keyword) {
    if (searchBy === "nickname") where.nickname = { contains: keyword };
    if (searchBy === "title") where.title = { contains: keyword };
    if (searchBy === "content") where.description = { contains: keyword };
    if (searchBy === "tag") {
      where.style_tags = {
        some: {
          tag: {
            name: { contains: keyword },
          },
        },
      };
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

  orderByArr.push({ id: "asc" });

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
  if (aggregations.length === 0) {
    return { totalItemCount: 0, rankedStyles: [] };
  }

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
      id: { in: styleIds.map((id) => BigInt(id)) },
    },
    include: {
      style_tags: { include: { tag: true } },
      style_count: true,
    },
  });
  const styleMap = new Map(styles.map((s) => [s.id.toString(), s]));

  const result = pagedItems
    .map((item, index) => {
      const entity = styleMap.get(item.styleId.toString());
      if (!entity) return null;
      const tags = entity.style_tags
        ? entity.style_tags.map((st) => st.tag.name)
        : [];

      return new RankingStyle(
        entity.id.toString(),
        entity.image_urls?.[0] || "",
        entity.style_tags?.map((st) => st.tag.name) || [],
        entity.title,
        entity.nickname,
        entity.style_count?.view_count || 0,
        item.curationCount,
        entity.categories || {},
        startIndex + index + 1,
        Number(item.score).toFixed(1)
      );
    })
    .filter(Boolean);

  return { totalItemCount, rankedStyles: result };
};
