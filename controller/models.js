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
export class GalleryStylesSearchParams {
  constructor(
    sortBy, //: SortBy
    searchBy, //: SearchByStyle
    keyword,
    tag,
    page //?
  ) {
    this.sortBy = sortBy;
    this.searchBy = searchBy;
    this.keyword = keyword;
    this.tag = tag;
    this.page = page;
  }
}

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
    .string()
    .min(1, "닉네임은 최소 1자 이상이어야 합니다.")
    .max(20, "닉네임은 최대 20자 이하여야 합니다."),
  content: z.string(),
  trendy: z.string(),
  personality: z.string(),
  practicality: z.string(),
  costEffectiveness: z.string(),
  password: z.string(),
});

export class CurationDeleteFormInput {
  constructor(password) {
    this.password = password;
  }
}

export const CommentFormInput = z.object({
  content: z.string(),
  password: z.string(),
});

export class CommentDeleteFormInput {
  constructor(password) {
    this.password = password;
  }
}

// baseUrl - input
export class BaseUrlSettingFormInput {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
}
