import { prisma, throwHttpError } from "./prisma/prisma.js";
export const styleTags = async () => {
  const tags = await prisma.tag.findMany({
    // styles 개수가 많은 순서대로 정렬
    orderBy: {
      styles: {
        _count: "desc",
      },
    },
    // 상위 10개만 가져오기
    take: 10,
  });
  const allMenu = {
    id: "all", // 프론트엔드에서 key값으로 사용할 고유값
    name: "전체", // 표시될 이름
    _count: { styles: 0 }, // 필드 구조를 맞추기 위한 기본값
  };

  // 2. 스프레드 연산자(...)를 사용하여 맨 앞에 추가한 새 배열을 만듭니다.
  const result = [allMenu, ...tags];
  return result;
};
