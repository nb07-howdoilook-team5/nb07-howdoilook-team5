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
    curationCount
  ) {
    this.id = id;
    this.tags = tags;
    this.title = title;
    this.nickname = nickname;
    this.categories = categories;
    this.description = description;
    this.createdAt = createdAt;
    this.curationCount = curationCount;
  }

  static fromEntity(entity) {
    if (!entity) return null;

    const {
      id,
      tags,
      title,
      nickname,
      categories,
      description,
      created_at: createdAt,
      style_count,
      _count,
    } = entity;

    if (tags && tags.length > 3) {
      tags = tags.slice(0, 3);
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
