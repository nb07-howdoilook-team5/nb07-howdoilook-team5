import { BadRequestError } from "../error/errors.js";

// ## 스타일

// **스타일 등록**

export class Style {
  // 태그(최대 3개), 제목, 닉네임, 스타일 구성, 스타일 설명, 비밀번호
  constructor(
    id,
    tags,
    title,
    nickname,
    categories,
    description,
    createdAt,
    curationCount,
    viewCount
  ) {
    this.id = id;
    this.tags = tags;
    this.title = title;
    this.nickname = nickname;
    this.categories = categories;
    this.description = description;
    this.createdAt = createdAt;
    this.curationCount = curationCount;
    this.viewCount = viewCount;
  }

  static fromEntity(entity) {
    if (!entity) return null;

    const {
      id,
      style_tags,
      title,
      nickname,
      categories,
      description,
      created_at: createdAt,
      style_count,
      _count,
    } = entity;

    let tags = [];
    if (Array.isArray(style_tags)) {
      tags = style_tags.map((st) => st.tag?.name).filter(Boolean);
    }
    const viewCount = style_count?.view_count ?? 0;
    const curationCount = _count?.curations ?? 0;

    return new Style(
      id.toString(),
      tags,
      title,
      nickname,
      categories,
      description,
      createdAt,
      curationCount,
      viewCount
    );
  }
}
