import { Prisma } from "@prisma/client/extension";
import { CurationDeleteFormInput, CurationFormInput } from "./models.js";
import { prisma, throwHttpError } from "../repository/prisma/prisma.js";
import { CurationComment } from "../domain/comment.js";

const validatePostComment = (req) => ({
  ...CurationFormInput.parse(req.body),
  curation_id: req.params.curationId,
});

class CommentController {
  postComment = (req, res, next) =>
    Promise.resolve(validatePostComment(req))
      .then((validatedData) =>
        throwHttpError(prisma.comment.create, { data: validatedData })
      )
      .then((newEntity) =>
        res.status(201).json(CurationComment.fromEntity(newEntity))
      );

  putComment(req, res, next) {}
  deleteComment(req, res, next) {}
}

const controller = new CommentController();

export default controller;
