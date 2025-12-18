import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs/promises";

import { uploadImage, getImage } from "../controller/image.controller.js";
import withErrorHandler from "../utils/asyncHandler.js";

const router = new Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: async (req, file, cb) => {
      try {
        const uploadDir = path.join("uploads", "images", "styles");
        await fs.mkdir(uploadDir, { recursive: true });
        cb(null, uploadDir);
      } catch (e) {
        cb(e);
      }
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      cb(null, `${Date.now()}-${Math.random().toString(16).slice(2)}${ext}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp/;
    const extOk = allowed.test(path.extname(file.originalname).toLowerCase());
    const mimeOk = allowed.test(file.mimetype);

    if (extOk && mimeOk) cb(null, true);
    else
      cb(
        new Error("이미지 파일만 업로드 가능합니다 (jpeg, jpg, png, gif, webp)")
      );
  },
});
router.post("/", upload.single("image"), withErrorHandler(uploadImage));
router.get("/:fileName", withErrorHandler(getImage));

export default router;
