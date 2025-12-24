import { CommentFormInput, CommentDeleteFormInput } from "./models.js";
import { CurationComment } from "../domain/comment.js";
import * as commentRepository from "../repository/comment.repository.js";

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
    const { curationId, nickname, content, password } =
      validatePostComment(req);

    const newEntity = await commentRepository.create({
      curationId,
      nickname,
      content,
      password,
    });

    res.status(201).json(newEntity);
  };

  putComment = async (req, res) => {
    const { commentId, password, data } = validatePutComment(req);

    const updatedEntity = await commentRepository.update({
      commentId,
      password,
      data,
    });

    res.status(200).json(updatedEntity);
  };

  deleteComment = async (req, res) => {
    const { commentId, password } = validateDeleteComment(req);

    await commentRepository.remove({
      commentId,
      password,
    });

    res.status(200).json({ message: "답글을 삭제하였습니다." });
  };
}

const controller = new CommentController();
export default controller;
