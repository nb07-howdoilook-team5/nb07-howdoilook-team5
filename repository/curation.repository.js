import { prisma, throwHttpError } from "./prisma/prisma.js";

export const create = (createData) =>
  throwHttpError(prisma.curation.create, {
    data: {
      ...createData,
      style: { connect: { id: createData.style_id } },
    },
  });

export const update = (curationId, password, updateData) =>
  throwHttpError(prisma.curation.update, {
    where: {
      id: curationId,
      password: password,
    },
    data: updateData,
  });

export const remove = (curationId, password) =>
  throwHttpError(prisma.curation.delete, {
    where: {
      id: curationId,
      password: password,
    },
  });

export const list = (styleId, searchBy, keyword, pageSize, skip) => {
  const where = { style_id: styleId };
  if (keyword) {
    if (searchBy === "nickname") {
      where.nickname = { contains: keyword };
    } else if (searchBy === "content") {
      where.content = { contains: keyword };
    }
  }

  return prisma
    .$transaction([
      prisma.curation.count({ where }),
      prisma.curation.findMany({
        where,
        take: pageSize,
        skip: skip,
        orderBy: { id: "desc" },
      }),
    ])
    .then(([totalItemCount, entities]) => ({ totalItemCount, entities }));
};
