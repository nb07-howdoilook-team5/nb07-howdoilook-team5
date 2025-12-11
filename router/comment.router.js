import { Router } from "express";
import commentController from "../controller/comment.controller.js";

const router = new Router();

router.put("/:curationId", commentController.putComment);
router.delete("/:curationId", commentController.deleteComment);

export default router;
