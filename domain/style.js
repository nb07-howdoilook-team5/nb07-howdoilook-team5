import { BadRequestError } from "../error/errors.js";

// ## 스타일

// **스타일 등록**

// - 유저가 사진(여러장 가능)을 업로드하고 태그(최대 3개), 제목, 닉네임, 스타일 구성, 스타일 설명, 비밀번호를 입력하여 스타일을 등록합니다.
export class UnregisteredStyle {
  // 태그(최대 3개), 제목, 닉네임, 스타일 구성, 스타일 설명, 비밀번호
  constructor(tags, title, nickname, categories, description, password) {
    this.tags = tags;
    this.title = title;
    this.nickname = nickname;
    this.categories = categories;
    this.description = description;
    this.password = password;
  }

  static fromInfo({
    tags,
    title,
    nickname,
    categories,
    description,
    password,
  }) {
    // 태그는 최대 3개
    if (tags.length > 3) throw new BadRequestError("태그 너무 많아, 3개까지만");
    return new UnregisteredStyle(
      tags,
      title,
      nickname,
      categories,
      description,
      password
    );
  }
}

export class Style {
  // 태그(최대 3개), 제목, 닉네임, 스타일 구성, 스타일 설명, 비밀번호
  constructor(
    id,
    tags,
    title,
    nickname,
    categories,
    description,
    password,
    createdAt,
    curationCount
  ) {
    this.id = id;
    this.tags = tags;
    this.title = title;
    this.nickname = nickname;
    this.categories = categories;
    this.description = description;
    this.password = password;
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
      password,
      created_at: createdAt,
      style_count,
      _count,
    } = entity;

    if (tags && tags.length > 3) {
      throw new BadRequestError("태그 너무 많아, 3개까지만");
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
      "",
      createdAt,
      curationCount,
      viewCount
    );
  }
}
