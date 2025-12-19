import { BadRequestError } from "../error/errors.js";
import path from "path";
import fs from "fs";

export const uploadImage = async (req, res) => {
  if (!req.file) {
    throw new BadRequestError("image 파일이 필요합니다.");
  }

  if (!req.file.mimetype.startsWith("image/")) {
    throw new BadRequestError("이미지 파일만 업로드 가능합니다.");
  }

  const baseUrl =
    process.env.BASE_URL || `${req.protocol}://${req.get("host")}`;
  const imageUrl = `${baseUrl}/images/${req.file.filename}`;

  res.status(200).json({ imageUrl });
};

export const getImage = async (req, res) => {
  const { fileName } = req.params;

  const filePath = path.join(
    process.cwd(),
    "uploads",
    "images",
    "styles",
    fileName
  );

  if (!fs.existsSync(filePath)) {
    throw new BadRequestError("이미지 파일을 찾을 수 없습니다.");
  }

  res.sendFile(filePath);
};
