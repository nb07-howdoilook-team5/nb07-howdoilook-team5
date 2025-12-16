import { prisma, throwHttpError } from "../repository/prisma/prisma.js";

export const create = (curationId, data) =>
  throwHttpError(prisma.curationComment.create, {
    data: {
      ...data,
      curation_id: curationId,
    },
  });

export const update = (commentId, password, data) =>
  throwHttpError(prisma.curationComment.update, {
    where: {
      id_password: { id: commentId, password },
    },
    data,
  });

export const remove = (commentId, password) =>
  throwHttpError(prisma.curationComment.delete, {
    where: {
      id_password: { id: commentId, password },
    },
  });
