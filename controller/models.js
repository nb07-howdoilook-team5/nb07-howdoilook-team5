import * as z from "zod";

export class PaginationResponse {
  constructor(currentPage, totalPages, totalItemCount, data) {
    this.currentPage = currentPage;
    this.totalPages = totalPages;
    this.totalItemCount = totalItemCount;
    this.data = data;
  }
}

const sortBylatest = "latest";
const sortBymostViewed = "mostViewed";
const sortBymostCurated = "mostCurated";

const searchByStylenickname = "nickname";
const searchByStyletitle = "title";
const searchByStylecontent = "content";
const searchByStyletag = "tag";

const searchByCurationnickname = "nickname";
const searchByCurationcontent = "content";

const rankBytotal = "total";
const rankBytrendy = "trendy";
const rankBypersonality = "personality";
const rankBypracticality = "practicality";
const rankBycostEffectiveness = "costEffectiveness";

// StyleComponent

// SearchParams

export const SortBySchema = z.union([
  z.literal("latest"),
  z.literal("mostViewed"),
  z.literal("mostCurated"),
]);

export const SearchByStyleSchema = z.union([
  z.literal("nickname"),
  z.literal("description"),
  z.literal("title"),
  z.literal("tag"),
]);

export const GalleryStylesSearchParamsSchema = z.object({
  sortBy: SortBySchema.optional(),
  searchBy: SearchByStyleSchema.optional(),
  keyword: z.string().optional(),
  tag: z.string().optional(),
  page: z
    .string() // 처음에 문자로 들어올텐데
    .nonempty("page는 빈 문자열일 수 없습니다.") // 꼭 있어야 하고
    .preprocess(
      (a) => parseInt(a) ?? a, // 숫자로 변환해봐서 성공이면 숫자, NaN이면 그냥 원래 스트링을 반환
      z.number().int("정수여야 합니다.").min(1, "1 이상이어야 합니다.") // 여기에 default값 설정 가능
    ),
});

export class RankingStylesSearchParams {
  constructor(
    rankBy, //: RankBy
    page
  ) {
    this.rankBy = rankBy;
    this.page = page;
  }
}

export class CurationsSearchParams {
  constructor(
    page,
    searchBy, //: SearchByCuration
    keyword
  ) {
    this.page = page;
    this.searchBy = searchBy;
    this.keyword = keyword;
  }
}

// style - data
export class GalleryStyle {
  constructor(
    id,
    thumbnail,
    tags, // []
    title,
    content,
    nickname,
    viewCount,
    curationCount,
    categories //{    [key in CategoryKey]?: CategoryValue  }
  ) {
    this.id = id;
    this.thumbnail = thumbnail;
    this.tags = tags;
    this.title = title;
    this.content = content;
    this.nickname = nickname;
    this.viewCount = viewCount;
    this.curationCount = curationCount;
    this.categories = categories;
  }
}

export class Ranking {
  constructor(ranking, rating) {
    this.ranking = ranking;
    this.rating = rating;
  }
}

export class RankingStyle {
  constructor(
    id,
    thumbnail,
    tags, // []
    title,
    nickname,
    viewCount,
    curationCount,
    categories, //{    [key in CategoryKey]?: CategoryValue  }
    ranking,
    rating
  ) {
    this.id = id;
    this.thumbnail = thumbnail;
    this.tags = tags;
    this.title = title;
    this.nickname = nickname;
    this.viewCount = viewCount;
    this.curationCount = curationCount;
    this.categories = categories;
    this.ranking = ranking;
    this.rating = rating;
  }
}

export class StyleDetail {
  constructor(
    id,
    imageUrls, // []
    tags, // []
    title,
    content,
    nickname,
    viewCount,
    curationCount,
    categories //{    [key in CategoryKey]?: CategoryValue  }
  ) {
    this.id = id;
    this.imageUrls = imageUrls;
    this.tags = tags;
    this.title = title;
    this.content = content;
    this.nickname = nickname;
    this.viewCount = viewCount;
    this.curationCount = curationCount;
    this.categories = categories;
  }
}

// curation - data
export class Curation {
  constructor(
    id,
    nickname,
    content,
    trendy,
    personality,
    practicality,
    costEffectiveness,
    comment //: CommentType | {}
  ) {
    this.id = id;
    this.nickname = nickname;
    this.content = content;
    this.trendy = trendy;
    this.personality = personality;
    this.practicality = practicality;
    this.costEffectiveness = costEffectiveness;
    this.comment = comment;
  }
}

export class Comment {
  constructor(id, nickname, content) {
    this.id = id;
    this.nickname = nickname;
    this.content = content;
  }
}

export class StyleFormInput {
  constructor(
    imageUrls, //: string[]
    tags, //: string[]
    title,
    nickname,
    content,
    categories, //: {    [key in CategoryKey]?: CategoryValue  }
    password
  ) {
    this.imageUrls = imageUrls;
    this.tags = tags;
    this.title = title;
    this.nickname = nickname;
    this.content = content;
    this.categories = categories;
    this.password = password;
  }
}

export class StyleDeleteFormInput {
  constructor(password) {
    this.password = password;
  }
}

// curation - input

export const CurationFormInput = z.object({
  nickname: z
    .string({
      required_error: "닉네임을 입력해야 합니다.",
    })
    .min(1, "닉네임은 최소 1자 이상이어야 합니다.")
    .max(20, "닉네임은 최대 20자까지 가능합니다."),

  content: z
    .string({
      required_error: "한줄 큐레이팅 내용을 입력해야 합니다.",
    })
    .min(1, "큐레이팅 내용은 최소 1자 이상이어야 합니다.")
    .max(150, "큐레이팅 내용은 최대 150자까지 가능합니다."),

  trendy: z
    .number({ required_error: "트렌디 점수를 입력해야 합니다." })
    .int("점수는 정수여야 합니다.")
    .min(0, "점수는 0점 이상이어야 합니다.")
    .max(10, "점수는 10점 이하이어야 합니다."),

  personality: z
    .number({ required_error: "개성 점수를 입력해야 합니다." })
    .int("점수는 정수여야 합니다.")
    .min(0, "점수는 0점 이상이어야 합니다.")
    .max(10, "점수는 10점 이하이어야 합니다."),

  practicality: z
    .number({ required_error: "실용성 점수를 입력해야 합니다." })
    .int("점수는 정수여야 합니다.")
    .min(0, "점수는 0점 이상이어야 합니다.")
    .max(10, "점수는 10점 이하이어야 합니다."),

  costEffectiveness: z
    .number({ required_error: "가성비 점수를 입력해야 합니다." })
    .int("점수는 정수여야 합니다.")
    .min(0, "점수는 0점 이상이어야 합니다.")
    .max(10, "점수는 10점 이하이어야 합니다."),

  password: z
    .string({
      required_error: "비밀번호를 입력해야 합니다.",
    })
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
    .max(16, "비밀번호는 최대 16자까지 가능합니다.")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/,
      "비밀번호는 영문, 숫자 조합 8~16자리여야 합니다."
    ),
});

export const CurationDeleteFormInput = z.object({
  password: z.string(),
});

export const CommentFormInput = z.object({
  content: z
    .string({
      required_error: "필수 입력사항입니다.",
    })
    .min(1)
    .max(150, { message: "150자 이내로 입력해 주세요" }),

  password: z
    .string({ required_error: "필수 입력사항입니다." })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/, {
      message: "영문, 숫자 조합 8~16자리로 입력해주세요.",
    }),
});

export const CommentDeleteFormInput = z.object({
  password: z
    .string({ required_error: "필수 입력사항입니다." })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/, {
      message: "영문, 숫자 조합 8~16자리로 입력해주세요.",
    }),
});
