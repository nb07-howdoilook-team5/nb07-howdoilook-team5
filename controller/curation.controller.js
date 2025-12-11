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
    style_id: BigInt(styleId),
  };
};

const validateUpdateCuration = (req) => {
  const { curationId } = req.params;
  const body = CurationFormInput.parse(req.body);
  return {
    curationId: BigInt(curationId),
    password: body.password,
    data: body,
  };
};

const validateDeleteCuration = (req) => {
  const { curationId } = req.params;
  const body = CurationDeleteFormInput.parse(req.body);
  return {
    curationId: BigInt(curationId),
    password: body.password,
  };
};

const validateGetCurations = (req) => {
  const { styleId } = req.params;
  const { page = 1, searchBy, keyword } = req.query;
  return {
    styleId: BigInt(styleId),
    page: parseInt(page),
    searchBy,
    keyword,
  };
};

class CurationController {
  postCuration = async (req, res, next) => {
    const validatedData = validatePostCuration(req);
    const { style_id, ...restData } = validatedData;
    const createData = {
      ...restData,
      style: { connect: { id: style_id } },
    };
    const newEntity = await throwHttpError(prisma.curation.create, {
      data: createData,
    });
    res.status(201).json(Curation.fromEntity(newEntity));
  };

  putCuration = async (req, res, next) => {
    const { curationId, password, data } = validateUpdateCuration(req);
    const target = await throwHttpError(prisma.curation.findUnique, {
      where: { id: curationId },
    });
    if (!target) throw new NotFoundError("큐레이팅을 찾을 수 없습니다.");
    if (target.password !== password)
      throw new ForbiddenError("비밀번호가 일치하지 않습니다.");
    const updatedEntity = await throwHttpError(prisma.curation.update, {
      where: { id: curationId },
      data,
    });
    res.status(200).json(Curation.fromEntity(updatedEntity));
  };

  deleteCuration = async (req, res, next) => {
    const { curationId, password } = validateDeleteCuration(req);
    const target = await throwHttpError(prisma.curation.findUnique, {
      where: { id: curationId },
    });
    if (!target) throw new NotFoundError("큐레이팅을 찾을 수 없습니다.");
    if (target.password !== password)
      throw new ForbiddenError("비밀번호가 일치하지 않습니다.");
    await throwHttpError(prisma.curation.delete, {
      where: { id: curationId },
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
