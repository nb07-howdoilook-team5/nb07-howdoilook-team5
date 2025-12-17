import { Prisma } from "@prisma/client/extension";
import {
  StyleDeleteFormInput,
  StyleFormInput,
  PaginationResponse,
  StyleDetail,
  GalleryStyle,
  GalleryStylesSearchParamsSchema,
} from "./models.js";
import * as styleRepository from "../repository/style.repository.js";
import { Style } from "../domain/style.js";

const validatePostStyle = (req) => {
  return StyleFormInput.parse(req.body);
};

const validateGetStyles = (req) => ({
  styleId: req.params.styleId,
  ...GalleryStylesSearchParamsSchema.parse(req.query),
});

const validateGetStyle = (req) => {
  const { id } = req.params; // <-- id는 여기서 가져오는 것이 맞습니다.
  return {
    styleId: id, // <-- 매개변수 이름을 styleId로 통일하는 것이 좋습니다.
  };
};
const validateUpdateStyle = (req) => {
  const { id } = req.params;
  const body = StyleFormInput.parse(req.body);
  const { password, ...data } = body;
  return {
    id,
    password,
    data,
  };
};

const validateDeleteStyle = (req) => {
  const { id } = req.params;
  const body = StyleDeleteFormInput.parse(req.body);
  return {
    id,
    password: body.password,
  };
};

class StyleController {
  postStyle = async (req, res, next) => {
    const validatedData = validatePostStyle(req);
    const newEntity = await styleRepository.create(validatedData);
    res.status(201).json(Style.fromEntity(newEntity));
  };

  putStyle = async (req, res, next) => {
    const { styleId, password, ...updatedData } = validateUpdateStyle(req);
    const updatedEntity = await styleRepository.update(
      styleId,
      password,
      updatedData
    );
    res.status(201).json(Style.fromEntity(updatedEntity));
  };

  getGalleryStyles = async (req, res, next) => {
    const { styleId, page, searchBy, keyword, tag, sortBy } =
      validateGetStyles(req);

    const limit = 12;
    const skip = (parseInt(page) - 1) * limit;
    const take = parseInt(limit);

    const [totalItemCount, entities] = await styleRepository.list(
      styleId,
      searchBy,
      keyword,
      sortBy,
      skip,
      take
    );
    const totalPages = Math.ceil(totalItemCount / limit);
    const data = entities.map((entity) => Style.fromEntity(entity));
    res
      .status(200)
      .json(new PaginationResponse(page, totalPages, totalItemCount, data));
  };

  getStyle = async (req, res, next) => {
    const { styleId } = validateGetStyle(req);
    const getEntity = await styleRepository.detail(styleId);
    res.status(200).json(Style.fromEntity(getEntity));
  };

  deleteStyle = async (req, res, next) => {
    const { styleId, password } = validateDeleteStyle(req);
    await styleRepository.remove(styleId, password);
    res.status(200).json({ message: "스타일 삭제 완료하였습니다." });
  };
}

const controller = new StyleController();

export default controller;
