import { prisma, throwHttpError } from "./prisma/prisma.js";

class CurationRepository {
  async create(createData) {
    return throwHttpError(prisma.curation.create, {
      data: {
        ...createData,
        style: { connect: { id: createData.style_id } },
        view_count: 0,
      },
      include: {
        style: { select: { id: true, title: true } },
      },
    });
  }

  async update(curationId, password, updateData) {
    return throwHttpError(prisma.curation.update, {
      where: {
        id_password: { id: curationId, password: password },
      },
      data: updateData,
    });
  }
  async delete(curationId, password) {
    await throwHttpError(prisma.curation.delete, {
      where: {
        id_password: { id: curationId, password: password },
      },
    });
  }
  async findManyAndCount(where, pageSize, skip) {
    const [totalItemCount, entities] = await Promise.all([
      prisma.curation.count({ where }),
      prisma.curation.findMany({
        where,
        take: pageSize,
        skip: skip,
        orderBy: { id: "desc" },
      }),
    ]);
    return { totalItemCount, entities };
  }
}
export const curationRepository = new CurationRepository();
