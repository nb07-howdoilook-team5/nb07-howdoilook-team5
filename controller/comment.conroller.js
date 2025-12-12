import { Prisma } from "@prisma/client/extension";
import { Comment, CommentFormInput, CommentDeleteFormInput } from "./models.js";
import { prisma, throwHttpError } from "../repository/prisma/prisma.js";
import {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
} from "../error/errors.js";
import { CurationComment } from "../domain/comment.js";

// /curations/{curationId}/comments
const validatePostComment = (req) => {
  const { curationId } = req.params;
  const body = CommentFormInput.parse(req.body);
  return {
    ...body,
    curationId,
  };
};

// /comments/{commentId}
const validatePutComment = (req) => {
  const { commentId } = req.params;
  const body = CommentFormInput.parse(req.body);
  const { password, ...data } = body;
  return {
    commentId,
    password,
    data,
  };
};

// /comments/{commentId}
const validateDeleteComment = (req) => {
  const { commentId } = req.params;
  const body = CommentDeleteFormInput.parse(req.body);
  return {
    commentId,
    password: body.password,
  };
};

class CommentController {
  postComment = (req, res, next) =>
    Promise.resolve(validatePostComment(req))
      .then((validatedData) =>
        throwHttpError(prisma.comment.create, { data: validatedData })
      )
      .then((newEntity) =>
        res.status(201).json(CurationComment.fromEntity(newEntity))
      );

  putComment = (req, res, next) =>
    Promise.resolve(validatePutComment(req))
      .then(({ commentId, password, data }) =>
        prisma.$transaction(async (tx) => {
          const existing = await tx.comment.findUnique({
            where: { id: commentId },
          });

          if (!existing) {
            throw new NotFoundError("존재하지 않습니다");
          }

          if (existing.password !== password) {
            throw new ForbiddenError("비밀번호가 틀렸습니다");
          }

          const updated = await tx.comment.update({
            where: { id: commentId },
            data,
          });

          return updated;
        })
      )
      .then((updatedEntity) =>
        res.status(200).json(CurationComment.fromEntity(updatedEntity))
      )
      .catch(next);

  deleteComment = (req, res, next) =>
    Promise.resolve(validateDeleteComment(req))
      .then(({ commentId, password }) =>
        throwHttpError(prisma.comment.findUnique, {
          where: { id: commentId },
        }).then((existing) => {
          if (!existing) {
            throw new NotFoundError("존재하지 않습니다");
          }
          if (existing.password !== password) {
            throw new ForbiddenError("비밀번호가 틀렸습니다");
          }

          return throwHttpError(prisma.comment.delete, {
            where: { id: commentId },
          });
        })
      )
      .then(() =>
        res.status(200).json({
          message: "답글 삭제 성공",
        })
      )
      .catch(next);
}

const controller = new CommentController();

export default controller;
