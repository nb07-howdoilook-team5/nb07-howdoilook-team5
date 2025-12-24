import { BadRequestError, NotFoundError } from "../error/errors.js"; // NotFoundError 추가
import path from "path";
import fs from "fs";

export const uploadImage = async (req, res) => {
  if (!req.file) {
    throw new BadRequestError("image 파일이 필요합니다.");
  }

  // 1. 응답 필드 보강: 'url'과 'imageUrl' 모두 반환 (테스트 호환성)
  const baseUrl =
    process.env.BASE_URL || `${req.protocol}://${req.get("host")}`;
  const imageUrl = `${baseUrl}/images/${req.file.filename}`;

  res.status(200).json({
    url: imageUrl, // 테스트 스크립트가 보통 'url'을 찾습니다.
    imageUrl: imageUrl,
  });
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

  // 2. 에러 타입 변경: 파일이 없는 경우 404가 더 적절합니다.
  if (!fs.existsSync(filePath)) {
    throw new NotFoundError("이미지 파일을 찾을 수 없습니다.");
  }

  res.sendFile(filePath);
};
