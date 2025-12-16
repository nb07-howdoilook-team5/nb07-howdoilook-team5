import { Prisma } from "@prisma/client/extension";
import {
  StyleDeleteFormInput,
  StyleFormInput,
  PaginationResponse,
  StyleDetail,
  GalleryStyle,
  GalleryStylesSearchParamsSchema,
} from "./models.js";
import { prisma, throwHttpError } from "../repository/prisma/prisma.js";
import { Style } from "../domain/style.js";

const validatePostStyle = (req) => {
  return StyleFormInput.parse(req.body);
};
const validateGetStyles = (req) => {
  const { styleId } = req.params;
  const {
    page = 1,
    limit = 12,
    searchBy,
    keyword,
    tag,
    sortBy,
  } = GalleryStylesSearchParamsSchema(req.query);
  return {
    styleId,
    page: parseInt(page),
    limit: parseInt(limit),
    searchBy,
    keyword,
    tag,
    sortBy,
  };
};

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
    const newEntity = await throwHttpError(
      prisma.style.create({ data: validatedData })
    );
    res.status(201).json(Style.fromEntity(newEntity));
  };

  putStyle = async (req, res, next) => {
    const { styleId, password, ...updatedData } = validateUpdateStyle(req);
    const updatedEntity = await throwHttpError(
      prisma.style.update({
        where: {
          id: styleId,
          password: password,
        },
        data: updatedData,
      })
    );
    res.status(201).json(Style.fromEntity(updatedEntity));
  };

  getGalleryStyles = async (req, res, next) => {
    const { styleId, page, limit, searchBy, keyword, tag, sortBy } =
      validateGetStyles(req);
    const skip = (parseInt(page) - 1) * limit;
    const take = parseInt(limit);

    const where = {};
    const searchByStylenickname = "nickname";
    const searchByStyletitle = "title";
    const searchByStylecontent = "content";
    const searchByStyletag = "tag";

    if (keyword) {
      switch (searchBy) {
        case searchByStylenickname:
          where.nickname = { contains: keyword };
          break;
        case searchByStylecontent:
          where.description = { contains: keyword };
          break;
        case searchByStyletitle:
          where.title = { contains: keyword };
          break;
        case searchByStyletag:
          const keywordArray = keyword.split(",").map((item) => item.trim());
          where.tags = { hasSome: keywordArray };
          break;
        default:
          throw new InternalServerError(`Invalid searchBy: ${searchBy}`);
      }
    }

    const orderByArr = [];
    if (sortBy === "latest") {
      orderByArr.push({ createdAt: "desc" });
    } else if (sortBy === "mostViewed") {
      orderByArr.push({ viewCount: "desc" });
    } else if (sortBy === "mostCurated") {
      orderByArr.push({ mostCurated: "desc" });
    }

    // 정렬 조건이 없을 경우 기본 정렬 추가 (예: 최신순)
    orderByArr.push({ id: "asc" }); // 또는 { createdAt: "desc" }
    const [totalItemCount, entities] = await Promise.all([
      prisma.style.count({ where }),
      prisma.style.findMany({
        where,
        take,
        skip,
        orderBy: orderByArr, // <-- 동적으로 생성한 orderByArr 사용
      }),
    ]);
    const totalPages = Math.ceil(totalItemCount / limit);
    const data = entities.map((entity) => Style.fromEntity(entity));
    res
      .status(200)
      .json(new PaginationResponse(page, totalPages, totalItemCount, data));
  };

  getStyle = async (req, res, next) => {
    const { styleId } = validateGetStyle(req);
    const getEntity = await throwHttpError(prisma.style.findUnique, {
      where: { id: styleId },
    });
    res.status(200).json(Style.fromEntity(getEntity));
  };

  deleteStyle = async (req, res, next) => {
    const { styleId, password } = validateDeleteStyle(req);
    await throwHttpError(prisma.style.delete, {
      where: {
        id: styleId,
        password: password,
      },
    });
    res.status(200).json({ message: "스타일 삭제 완료하였습니다." });
  };
}

const controller = new StyleController();

export default controller;
