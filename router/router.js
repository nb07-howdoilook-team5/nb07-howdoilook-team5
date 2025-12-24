import { Router } from "express";
import commentRouter from "./comment.router.js";
import curationRouter from "./curation.router.js";
import styleRouter from "./style.router.js";
import imageRouter from "./image.router.js";
import tagRouter from "./tag.router.js";
import styleController from "../controller/style.controller.js";
import withErrorHandler from "../utils/asyncHandler.js";

const router = new Router();
router.get(
  "/styles/ranking",
  withErrorHandler(styleController.getRankingStyles)
);

router.use("/comments", commentRouter);
router.use("/curations", curationRouter);
router.use("/styles", styleRouter);
router.use("/images", imageRouter);
router.use(`/tags`, tagRouter);

export default router;
