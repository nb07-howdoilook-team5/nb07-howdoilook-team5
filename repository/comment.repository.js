import { CurationComment } from "../domain/comment.js";
import { prisma, throwHttpError } from "./prisma/prisma.js";
import { ForbiddenError, NotFoundError } from "../error/errors.js";

export const create = async (createData) => {
  const { curationId, content, password } = createData;

  const curationData = await prisma.curation.findUnique({
    where: { id: BigInt(curationId) },
  });

  if (!curationData) {
    throw new NotFoundError("큐레이션이 존재하지 않습니다");
  }

  const styleData = await prisma.style.findUnique({
    where: { id: BigInt(curationData.style_id) },
  });

  if (!styleData) {
    throw new NotFoundError("스타일이 존재하지 않습니다");
  }

  // 수정됨: create 내부 로직 단순화 및 BigInt 처리
  const newComment = await throwHttpError(() =>
    prisma.curation_comment.create({
      data: {
        nickname: styleData.nickname,
        content: content,
        password: password,
        curation_id: BigInt(curationId),
      },
      include: {
        curation: {
          include: {
            style: true,
          },
        },
      },
    })
  );

  return CurationComment.fromEntity(newComment);
};

export const update = async ({ commentId, password, data }) => {
  // 1. 조회 (BigInt 변환 필수)
  const commentData = await prisma.curation_comment.findUnique({
    where: { id: BigInt(commentId) },
  });

  if (!commentData) {
    throw new NotFoundError("답글을 찾을 수 없습니다.");
  }

  if (commentData.password !== password) {
    throw new ForbiddenError("비밀번호가 일치하지 않습니다.");
  }

  // 2. 업데이트 (BigInt 변환 필수)
  const updated = await throwHttpError(() =>
    prisma.curation_comment.update({
      where: {
        id: BigInt(commentId),
      },
      data: {
        content: data.content,
      },
      include: {
        curation: { include: { style: true } },
      },
    })
  );
  return CurationComment.fromEntity(updated);
};

export const remove = async ({ commentId, password }) => {
  const comment = await prisma.curation_comment.findUnique({
    where: { id: BigInt(commentId) },
  });

  if (!comment) throw new NotFoundError("답글을 찾을 수 없습니다.");
  if (comment.password !== password)
    throw new ForbiddenError("비밀번호 불일치");

  return throwHttpError(() =>
    prisma.curation_comment.delete({
      where: { id: BigInt(commentId) },
    })
  );
};
