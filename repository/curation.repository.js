import { prisma, throwHttpError } from "./prisma/prisma.js";

export const create = (createData) => {
  const { style_id, ...rest } = createData;

  return throwHttpError(prisma.curation.create, {
    data: {
      ...rest,
      style: { connect: { id: Number(style_id) } },
    },
  });
};
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
