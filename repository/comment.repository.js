import { prisma, throwHttpError } from "./prisma/prisma.js";
import { ForbiddenError, NotFoundError } from "../error/errors.js";

export const curationCommentRepository = {
  create({ curationId, nickname, content, password }) {
    return throwHttpError(prisma.curation_comment.create, {
      data: {
        nickname,
        content,
        password,
        curation_id: curationId,
      },
    });
  },

  async update({ commentId, password, data }) {
    const existing = await prisma.curation_comment.findUnique({
      where: { id: commentId },
    });
    if (!existing) throw new NotFoundError("존재하지 않습니다");
    if (existing.password !== password)
      throw new ForbiddenError("비밀번호가 틀렸습니다");

    return prisma.curation_comment.update({
      where: { id: commentId },
      data,
    });
  },

  async delete({ commentId, password }) {
    const existing = await prisma.curation_comment.findUnique({
      where: { id: commentId },
    });
    if (!existing) throw new NotFoundError("존재하지 않습니다");
    if (existing.password !== password)
      throw new ForbiddenError("비밀번호가 틀렸습니다");

    return prisma.curation_comment.delete({
      where: { id: commentId },
    });
  },
};
