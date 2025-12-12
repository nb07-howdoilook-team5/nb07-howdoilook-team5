import {
  CurationFormInput,
  CurationDeleteFormInput,
  PaginationResponse,
  Curation,
} from "./models";
import { prisma, throwHttpError } from "../repository/prisma/prisma.js";
import {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
} from "../error/errors.js";

const validatePostCuration = (req) => {
  const { styleId } = req.params;
  const body = CurationFormInput.parse(req.body);
  return {
    ...body,
    styleId,
  };
};

const validateUpdateCuration = (req) => {
  const { curationId } = req.params;
  const body = CurationFormInput.parse(req.body);
  return {
    curationId,
    ...body,
  };
};

const validateDeleteCuration = (req) => {
  const { curationId } = req.params;
  const body = CurationDeleteFormInput.parse(req.body);
  return {
    curationId,
    password: body.password,
  };
};

const validateGetCurations = (req) => {
  const { styleId } = req.params;
  const { page = 1, searchBy, keyword } = req.query;
  return {
    styleId,
    page: parseInt(page),
    searchBy,
    keyword,
  };
};

class CurationController {
  postCuration = async (req, res, next) => {
    const { styleId, ...restData } = validatePostCuration(req);
    const createData = {
      ...restData,
      style_id: styleId,
    };
    const newEntity = await throwHttpError(prisma.curation.create, {
      data: createData,
    });
    res.status(201).json(Curation.fromEntity(newEntity));
  };

  putCuration = async (req, res, next) => {
    const { curationId, password, ...updateData } = validateUpdateCuration(req);
    const updatedEntity = await throwHttpError(prisma.curation.update, {
      where: {
        id_password: {
          id: curationId,
          password: password,
        },
      },
      data: updateData,
    });
    res.status(200).json(Curation.fromEntity(updatedEntity));
  };

  deleteCuration = async (req, res, next) => {
    const { curationId, password } = validateDeleteCuration(req);
    const result = await throwHttpError(prisma.curation.delete, {
      where: {
        id_password: {
          id: curationId,
          password: password,
        },
      },
    });
    res.status(200).json({ message: "큐레이팅을 삭제하였습니다." });
  };

  getCurations = async (req, res, next) => {
    const { styleId, page, searchBy, keyword } = validateGetCurations(req);
    const pageSize = 5;
    const where = { style_id: styleId };
    if (keyword) {
      if (searchBy === "nickname") where.nickname = { contains: keyword };
      else if (searchBy === "content") where.content = { contains: keyword };
    }
    const [totalItemCount, entities] = await Promise.all([
      prisma.curation.count({ where }),
      prisma.curation.findMany({
        where,
        take: pageSize,
        skip: (page - 1) * pageSize,
        orderBy: { id: "desc" },
      }),
    ]);

    const totalPages = Math.ceil(totalItemCount / pageSize);
    const data = entities.map((entity) => Curation.fromEntity(entity));

    res
      .status(200)
      .json(new PaginationResponse(page, totalPages, totalItemCount, data));
  };
}

const controller = new CurationController();
export default controller;
