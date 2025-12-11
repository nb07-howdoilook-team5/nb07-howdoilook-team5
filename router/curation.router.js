import { Router } from "express";
import curationController from "../controller/curation.controller.js";
import commentController from "../controller/comment.controller.js";
import withErrorHandler from "../utils/asyncHandler.js";

const router = new Router();

router.post(
  "/:curationId/comments",
  withErrorHandler(commentController.postComment)
);
router.put("/:curationId", withErrorHandler(curationController.putCuration));
router.delete(
  "/:curationId",
  withErrorHandler(curationController.deleteCuration)
);

export default router;
