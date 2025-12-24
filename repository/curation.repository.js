import { prisma, throwHttpError } from "./prisma/prisma.js";
import { ForbiddenError, NotFoundError } from "../error/errors.js";

export const create = (createData) => {
  const { style_id, ...rest } = createData;
  return throwHttpError(() =>
    prisma.curation.create({
      data: {
        ...rest,
        // 수정됨: BigInt 변환
        style: { connect: { id: BigInt(style_id) } },
      },
    })
  );
};

export const update = async (curationId, password, updateData) => {
  const curation = await prisma.curation.findUnique({
    where: { id: BigInt(curationId) },
  });

  if (!curation) throw new NotFoundError("큐레이팅을 찾을 수 없습니다.");
  if (curation.password !== password)
    throw new ForbiddenError("비밀번호 불일치");

  return throwHttpError(() =>
    prisma.curation.update({
      where: { id: BigInt(curationId) },
      data: updateData,
    })
  );
};

export const remove = async (curationId, password) => {
  const curation = await prisma.curation.findUnique({
    where: { id: BigInt(curationId) },
  });

  if (!curation) throw new NotFoundError("큐레이팅을 찾을 수 없습니다.");
  if (curation.password !== password)
    throw new ForbiddenError("비밀번호 불일치");

  return throwHttpError(() =>
    prisma.curation.delete({
      where: { id: BigInt(curationId) },
    })
  );
};

export const list = (styleId, searchBy, keyword, pageSize, skip) => {
  // 수정됨: BigInt 변환
  const where = { style_id: BigInt(styleId) };
  if (keyword) {
    if (searchBy === "nickname") {
      where.nickname = { contains: keyword };
    } else if (searchBy === "content") {
      where.content = { contains: keyword };
    }
  }

  return prisma
    .$transaction([
      prisma.curation.count({ where }),
      prisma.curation.findMany({
        where,
        take: Number(pageSize),
        skip: Number(skip),
        orderBy: { id: "desc" },
      }),
    ])
    .then(([totalItemCount, entities]) => ({ totalItemCount, entities }));
};
