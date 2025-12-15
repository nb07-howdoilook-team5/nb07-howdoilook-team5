import { Router } from "express";
import commentController from "../controller/comment.controller.js";
import withErrorHandler from "../utils/asyncHandler.js";
const router = new Router();

router.post("/", withErrorHandler(commentController.postComment));

router.put("/:commentId", withErrorHandler(commentController.putComment));

router.delete("/:commentId", withErrorHandler(commentController.deleteComment));

export default router;
