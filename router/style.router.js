import { Router } from "express";
import commentController from "../controller/comment.controller.js";
import styleController from "../controller/style.controller.js";
const router = new Router();

router.post("/styles/:styleId/curations", curationHandler.postCuration);
router.get("/styles/:styleId/curations", curationHandler.getCurations);
router.post("/styles", styleHandler.postStyle);
router.get("/styles/:styleId", styleHandler.getStyle);
router.put("/styles/:styleId", styleHandler.putStyle);
router.delete("/styles/:styleId", styleHandler.deleteStyle);
router.get("/styles", styleHandler.getGalleryStyles);

export default router;
