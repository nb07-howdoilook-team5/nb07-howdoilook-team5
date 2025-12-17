import { BadRequestError } from "../error/errors.js";

const uploadImage = async (req, res) => {
  if (!req.file) {
    throw new BadRequestError("image 파일이 필요합니다.");
  }

  if (!req.file.mimetype.startsWith("image/")) {
    throw new BadRequestError("이미지 파일만 업로드 가능합니다.");
  }

  const imageUrl = `/uploads/images/styles/${req.file.filename}`;

  res.status(200).json({ imageUrl });
};

export default uploadImage;
