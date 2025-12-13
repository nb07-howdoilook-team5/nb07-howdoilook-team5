import { prisma, throwHttpError } from "./prisma/prisma.js";

class CurationRepository {
  create = (createData) =>
    throwHttpError(prisma.curation.create, {
      data: {
        ...createData,
        style: { connect: { id: createData.style_id } },
        view_count: 0,
      },
      include: {
        style: { select: { id: true, title: true } },
      },
    });

  update = (curationId, password, updateData) =>
    throwHttpError(prisma.curation.update, {
      where: {
        id_password: { id: curationId, password: password },
      },
      data: updateData,
    });

  delete = (curationId, password) =>
    throwHttpError(prisma.curation.delete, {
      where: {
        id_password: { id: curationId, password: password },
      },
    });

  findManyAndCount = (where, pageSize, skip) =>
    prisma
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
}
export const curationRepository = new CurationRepository();
