import { Prisma } from "@prisma/client/extension";
import {
  StyleDeleteFormInput,
  StyleFormInput,
  PaginationResponse,
  StyleDetail,
  GalleryStyle,
} from "./models.js";
import { prisma, throwHttpError } from "../repository/prisma/prisma.js";
import { Style } from "../domain/style.js";

const validatePostStyle = (req) => {
  const body = StyleFormInput.parse(req.body);
  return {
    ...body,
  };
};
const validateGetStyles = (req) => {
  const { page = 1, limit = 12, searchBy, keyword, tag, sortBy } = req.query;
  return {
    page: parseInt(page),
    limit: parseInt(limit),
    searchBy,
    keyword,
    tag,
    sortBy,
  };
};

const validateGetStyle = (req) => {
  const { id } = req.params;
  const body = StyleDetail.parse(req.body);
  return {
    id: body.id,
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
    const updatedEntity = await throwHttpError(prisma.style.update, {
      where: {
        findInfo: {
          id: styleId,
          password: password,
        },
      },
      data: updatedData,
    });
    res.status(201).json(Style.fromEntity(updatedEntity));
  };
  getGalleryStyles = (req, res, next) => {
    const { page, limit, searchBy, keyword, tag, sortBy } =
      validateGetStyles(req);

    const skip = (parseInt(page) - 1) * limit;
    const take = parseInt(limit);

    const pageSize = 12;
    const where = {};
    const orderBy = {};
    if (keyword) {
      if (searchBy === "nickname") where.nickname = { contains: keyword };
      else if (searchBy === "description")
        where.description = { contains: keyword };
      else if (searchBy === "title") where.title = { contains: keyword };
      else if (searchBy === "tag") where.tag = { contains: keyword };
    }
    if (sortBy) {
      if (sortBy === "latest") {
        // 'latest'일 경우, 일반적으로 'createdAt' 필드를 내림차순 정렬
        orderBy = { createdAt: "desc" };
      } else if (sortBy === "mostViewed") {
        // 'mostViewed'일 경우, 'viewCount' 필드를 내림차순 정렬
        orderBy = { viewCount: "desc" };
      } else if (sortBy === "mostCurated") {
        // 'mostCurated'일 경우, 'curationCount' 등의 필드를 내림차순 정렬
        orderBy = { curationCount: "desc" };
      }
    }

    if (tag) {
      if (tag === "tag") where.tag = { contains: tag };
    }
    const [totalItemCount, entities] = Promise.all([
      prisma.style.count({ where }),
      prisma.style.findMany({
        where,
        take,
        skip,
        orderBy: [
          { created_at: "desc" },
          { viewCount: "desc" },
          { curationCount: "desc" },
          { id: "asc" },
        ],
      }),
    ]);

    const totalPages = Math.ceil(totalItemCount / pageSize);
    const data = entities.map((entity) => Style.fromEntity(entity));
    res
      .status(200)
      .json(new PaginationResponse(page, totalPages, totalItemCount, data));
  };
  getStyle = async (req, res, next) => {
    const { styleId } = validateGetStyle(req);
    const getEntity = await throwHttpError(prisma.style.findUnigue, {
      where: { id: styleId },
    });
    res.status(200).json(Style.fromEntity(getEntity));
  };
  deleteStyle = async (req, res, next) => {
    const { styleId, password } = validateDeleteStyle(req);
    const deleteresult = await throwHttpError(prisma.style.delete, {
      where: {
        findInfo: {
          id: styleId,
          password: password,
        },
      },
    });
    res.status(200).json({ message: "스타일 삭제 완료하였습니다." });
  };
}

const controller = new StyleController();

export default controller;
