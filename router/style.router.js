import { Router } from "express";
import curationController from "../controller/curation.controller.js";
import styleController from "../controller/style.controller.js";

import withErrorHandler from "../utils/asyncHandler.js";

const router = new Router();

router.post(
  "/:styleId/curations",
  withErrorHandler(curationController.postCuration)
);
router.get(
  "/:styleId/curations",
  withErrorHandler(curationController.getCurations)
);
router.post("/", withErrorHandler(styleController.postStyle));
router.get("/:styleId", withErrorHandler(styleController.getStyle));
router.put("/:styleId", withErrorHandler(styleController.putStyle));
router.delete("/:styleId", withErrorHandler(styleController.deleteStyle));
router.get("/", withErrorHandler(styleController.getGalleryStyles));

export default router;
