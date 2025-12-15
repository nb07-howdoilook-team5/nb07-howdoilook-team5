import { CommentFormInput, CommentDeleteFormInput } from "./models.js";
import { prisma, throwHttpError } from "../repository/prisma/prisma.js";
import { CurationComment } from "../domain/comment.js";

const validatePostComment = (req) => {
  const { curationId } = req.params;
  const body = CommentFormInput.parse(req.body);
  return {
    curationId,
    ...body,
  };
};

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

const validateDeleteComment = (req) => {
  const { commentId } = req.params;
  const body = CommentDeleteFormInput.parse(req.body);
  return {
    commentId,
    password: body.password,
  };
};

class CommentController {
  postComment = async (req, res) => {
    const { curationId, content, password } = validatePostComment(req);
    const newEntity = await throwHttpError(prisma.comment.create, {
      data: {
        content,
        password,
        curation_id: curationId,
      },
    });

    res.status(201).json(CurationComment.fromEntity(newEntity));
  };

  putComment = async (req, res) => {
    const { commentId, password, data } = validatePutComment(req);
    const updatedEntity = await throwHttpError(prisma.comment.update, {
      where: {
        id_password: {
          id: commentId,
          password,
        },
      },
      data,
    });

    res.status(200).json(CurationComment.fromEntity(updatedEntity));
  };

  deleteComment = async (req, res) => {
    const { commentId, password } = validateDeleteComment(req);
    await throwHttpError(prisma.comment.delete, {
      where: {
        id_password: {
          id: commentId,
          password,
        },
      },
    });

    res.status(200).json({ message: "답글을 삭제하였습니다." });
  };
}

const controller = new CommentController();
export default controller;
