import { prisma, throwHttpError } from "./prisma/prisma.js";
export const styleTags = () =>
  throwHttpError(prisma.tag.findMany, {
    // styles 개수가 많은 순서대로 정렬
    orderBy: {
      styles: {
        _count: "desc",
      },
    },
    // 일단 다 올리는걸로 해봅시당
    // 상위 10개만 가져오기
    // take: 10,
  });
