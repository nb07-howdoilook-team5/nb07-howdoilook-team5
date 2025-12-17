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
  });

export const list = (styleId, page, searchBy, keyword, tag, sortBy) => {
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
    orderByArr.push({ createdAt: "desc" });
  } else if (sortBy === "mostViewed") {
    orderByArr.push({ viewCount: "desc" });
  } else if (sortBy === "mostCurated") {
    orderByArr.push({ mostCurated: "desc" });
  }

  // 정렬 조건이 없을 경우 기본 정렬 추가 (예: 최신순)
  orderByArr.push({ id: "asc" }); // 또는 { createdAt: "desc" }

  return prisma
    .$transaction([
      prisma.style.count({ where }),
      prisma.style.findMany({
        where,
        take,
        skip,
        orderBy: orderByArr,
      }),
    ])
    .then(([totalItemCount, entities]) => ({ totalItemCount, entities }));
};
