import { CurationComment } from "../domain/comment.js";
import { prisma, throwHttpError } from "./prisma/prisma.js";

export const create = async (createData) => {
  const { curationId, content, password } = createData;

  // 1. 큐레이션 존재 확인
  const curationData = await prisma.curation.findUnique({
    where: { id: BigInt(curationId) },
  });

  if (!curationData) {
    // throw new 키워드 확인 필요 (보통 에러 객체는 throw new로 던집니다)
    throw new throwHttpError(404, "큐레이션이 존재하지 않습니다");
  }

  // 2. 스타일 존재 확인
  const styleData = await prisma.style.findUnique({
    where: { id: BigInt(curationData.style_id) },
  });

  if (!styleData) {
    throw new throwHttpError(404, "스타일이 존재하지 않습니다");
  }
  try {
    // 4. 데이터 생성 (이 부분이 실제 실행 로직입니다)
    const newComment = await prisma.curation_comment.create({
      data: {
        nickname: styleData.nickname,
        content: content,
        password: password,
        curation_id: curationId,
      },
      include: {
        curation: {
          include: {
            style: true, // 만약 comment -> curation -> style 순서로 접근한다면
          },
        },
      },
    });

    // 5. 엔티티 변환 후 반환
    return CurationComment.fromEntity(newComment);
  } catch (error) {
    console.error("Prisma Create Error:", error);
    throw new throwHttpError(500, "댓글 생성 중 오류가 발생했습니다");
  }
};
export const update = async (commentId, password, updateData) => {
  // console.log("1");
  // const commentData = await prisma.curation_comment.findUnique({
  //   where: { id: BigInt(commentId) },
  //   include: {
  //     curation: {
  //       include: {
  //         style: true,
  //       },
  //     },
  //   },
  // });
  // console.log("2");
  // if (!commentData) {
  //   throw new NotFoundError("답글을 찾을 수 없습니다.");
  // }
  // console.log("3");
  // if (commentData.password !== password) {
  //   throw new ForbiddenError("비밀번호가 일치하지 않습니다.");
  // }
  // console.log("4");
  console.log("id:" + id);
  return throwHttpError(async () => {
    await prisma.curation_comment.update({
      where: {
        id: commentId,
        password: password,
      },
      data: updateData,
    });
  }).then(CurationComment.fromEntity);
};
export const remove = (commentId, password) =>
  throwHttpError(prisma.curation_comment.delete, {
    where: {
      id: commentId,
      password: password,
    },
  });
