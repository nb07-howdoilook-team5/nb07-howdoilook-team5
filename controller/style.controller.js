import {
  StyleFormInput,
  StyleDeleteFormInput,
  PaginationResponse,
  GalleryStylesSearchParamsSchema,
  RankingStylesSearchParamsSchema,
  Style,
  RankingStyle,
} from "./models.js";
import * as styleRepository from "../repository/style.repository.js";

const validatePostStyle = (req) => StyleFormInput.parse(req.body);

const validateGetStyles = (req) =>
  GalleryStylesSearchParamsSchema.parse(req.query);

const validateGetStyle = (req) => {
  const { id } = req.params; // <-- id는 여기서 가져오는 것이 맞습니다.
  return {
    styleId: id, // <-- 매개변수 이름을 styleId로 통일하는 것이 좋습니다.
  };
};
const validateUpdateStyle = (req) => {
  const body = StyleFormInput.parse(req.body);
  const { password, ...data } = body;
  return { styleId: req.params.id, password, data };
};

const validateDeleteStyle = (req) => ({
  styleId: req.params.id,
  password: StyleDeleteFormInput.parse(req.body).password,
});

const validateGetRankingStyles = (req) =>
  RankingStylesSearchParamsSchema.parse(req.query);

class StyleController {
  postStyle = async (req, res, next) => {
    const validatedData = validatePostStyle(req);
    const registeredStyle = await styleRepository.create(validatedData);
    res.status(201).json(registeredStyle);
  };

  putStyle = async (req, res, next) => {
    const { styleId, password, data } = validateUpdateStyle(req);
    const updated = await styleRepository.update(styleId, password, data);
    res.status(201).json(updated);
  };

  getGalleryStyles = async (req, res, next) => {
    const { page, searchBy, keyword, sortBy, pageSize } =
      validateGetStyles(req);
    const skip = (page - 1) * pageSize;

    const { totalItemCount, styles } = await styleRepository.list(
      searchBy,
      keyword,
      sortBy,
      skip,
      pageSize
    );
    res
      .status(200)
      .json(
        new PaginationResponse(
          page,
          Math.ceil(totalItemCount / pageSize),
          totalItemCount,
          styles
        )
      );
  };

  getRankingStyles = async (req, res, next) => {
    const { page, pageSize, rankBy } = validateGetRankingStyles(req);
    const { totalItemCount, rankedStyles } = await styleRepository.ranking(
      rankBy,
      page,
      pageSize
    );

    res
      .status(200)
      .json(
        new PaginationResponse(
          page,
          Math.ceil(totalItemCount / pageSize),
          totalItemCount,
          rankedStyles
        )
      );
  };

  getStyle = (req, res, next) =>
    Promise.resolve(validateGetStyle(req))
      .then(({ styleId }) => styleRepository.detail(styleId))
      .then((i) => res.status(200).json(i));

  deleteStyle = async (req, res, next) => {
    const { styleId, password } = validateDeleteStyle(req);
    await styleRepository.remove(styleId, password);
    res.status(200).json({ message: "스타일 삭제 완료하였습니다." });
  };
}
const controller = new StyleController();

export default controller;
