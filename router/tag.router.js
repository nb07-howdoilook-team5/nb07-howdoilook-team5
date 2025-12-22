import { Router } from "express";
import tagController from "../controller/tag.controller.js";
import withErrorHandler from "../utils/asyncHandler.js";

const router = new Router();
router.get("/", withErrorHandler(tagController.getGalleryTags));

export default router;
