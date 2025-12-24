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
  z.literal("content"),
  z.literal("title"),
  z.literal("tag"),
]);

export const GalleryStylesSearchParamsSchema = z.object({
  sortBy: SortBySchema.optional(),
  searchBy: SearchByStyleSchema.optional(),
  keyword: z.string().optional(),
  tag: z.string().optional(),
  page: z.coerce
    .number()
    .int("정수여야 합니다.")
    .min(1, "1 이상이어야 합니다.")
    .default(1),

  pageSize: z.coerce
    .number()
    .int("정수여야 합니다.")
    .min(1, "1 이상이어야 합니다.")
    .default(10),
});

export const RankingStylesSearchParamsSchema = z.object({
  rankBy: z
    .enum([
      "total",
      "trendy",
      "personality",
      "practicality",
      "costEffectiveness",
    ])
    .optional()
    .default("total"),
  page: z.coerce
    .number()
    .int("정수여야 합니다.")
    .min(1, "1 이상이어야 합니다.")
    .default(1),

  pageSize: z.coerce
    .number()
    .int("정수여야 합니다.")
    .min(1, "1 이상이어야 합니다.")
    .default(10),
});

export const CurationsSearchParamsSchema = z.object({
  page: z.coerce
    .number()
    .int("정수여야 합니다.")
    .min(1, "1 이상이어야 합니다.")
    .default(1),

  pageSize: z.coerce
    .number()
    .int("정수여야 합니다.")
    .min(1, "1 이상이어야 합니다.")
    .default(10),
  searchBy: z.enum(["nickname", "content"]).optional().default("nickname"),
  keyword: z.string().optional().default(""),
});

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
    thumbnail, // []
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

export class Comment {
  constructor(id, nickname, content) {
    this.id = id;
    this.nickname = nickname;
    this.content = content;
  }
}

const CategoryItemSchema = z.object({
  name: z
    .string()
    .min(1, "의상명을 입력해주세요.")
    .max(20, "의상명은 20자 이하여야 합니다."),
  brand: z.string().min(1, "브랜드명을 입력해주세요."),
  price: z.number().min(0, "가격은 0원 이상이어야 합니다.").default(0),
});

const AllowedCategoryKeys = z.enum([
  "top",
  "bottom",
  "outer",
  "dress",
  "shoes",
  "bag",
  "accessory",
]);

export const StyleFormInput = z.object({
  imageUrls: z
    .array(z.url("올바른 URL 형식이 아닙니다."))
    .min(1, "이미지를 등록해주세요"),

  tags: z
    .array(z.string())
    .max(3, "태그는 최대 3개까지만 등록 가능합니다.")
    .optional()
    .default([]),

  title: z
    .string()
    .min(1, "제목을 입력해주세요.")
    .max(30, "제목은 30자 이내로 입력해주세요."),

  nickname: z
    .string()
    .min(1, "닉네임을 입력해주세요.")
    .max(20, "닉네임은 20자 이내로 입력해주세요."),

  content: z
    .string()
    .min(1, "내용을 입력해주세요.")
    .max(500, "내용은 500자 이내로 입력해주세요."),

  password: z
    .string()
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
    .max(16, "비밀번호는 최대 16자 이내여야 합니다.")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
      "비밀번호는 영문, 숫자 조합 8~16자리여야 합니다."
    ),

  categories: z
    .object({
      top: CategoryItemSchema.optional(),
      bottom: CategoryItemSchema.optional(),
      outer: CategoryItemSchema.optional(),
      dress: CategoryItemSchema.optional(),
      shoes: CategoryItemSchema.optional(),
      bag: CategoryItemSchema.optional(),
      accessory: CategoryItemSchema.optional(),
    })
    .refine((data) => Object.values(data).some((val) => val !== undefined), {
      message: "최소 하나 이상의 스타일 구성요소를 입력해야 합니다.",
    }),
});

export const StyleDeleteFormInput = z.object({
  password: z.string().min(1, "비밀번호를 입력해주세요."),
});

// curation - input

export const CurationFormInput = z
  .object({
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
      .max(16, "비밀번호는 최대 16자 이내여야 합니다.")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/,
        "비밀번호는 영문, 숫자 조합 8~16자리여야 합니다."
      ),
  })
  .transform((data) => {
    const { costEffectiveness, ...rest } = data;
    return {
      ...rest,
      cost_effectiveness: costEffectiveness,
    };
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
