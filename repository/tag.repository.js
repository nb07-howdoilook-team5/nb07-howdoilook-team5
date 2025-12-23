import { prisma, throwHttpError } from "./prisma/prisma.js";
export const styleTags = async () => {
  const tagsD = await throwHttpError(prisma.tag.findMany, {
    orderBy: {
      style_tags: {
        _count: "desc",
      },
    },
    select: {
      name: true,
    },
  });
  return {
    tags: tagsD.map((tag) => tag.name),
  };
};
