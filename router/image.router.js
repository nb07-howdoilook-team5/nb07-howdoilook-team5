import { Router } from "express";
import uploadImage from "../controller/image.controller.js";
import withErrorHandler from "../utils/asyncHandler.js";

const router = new Router();

router.post("/", withErrorHandler(uploadImage));

export default router;
