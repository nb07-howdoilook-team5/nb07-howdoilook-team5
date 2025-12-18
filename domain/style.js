import { BadRequestError } from "../error/errors.js";

// ## 스타일

// **스타일 등록**

// - 유저가 사진(여러장 가능)을 업로드하고 태그(최대 3개), 제목, 닉네임, 스타일 구성, 스타일 설명, 비밀번호를 입력하여 스타일을 등록합니다.
export class UnregisteredStyle {
  // 태그(최대 3개), 제목, 닉네임, 스타일 구성, 스타일 설명, 비밀번호
  constructor(tags, title, nickname, styleComponent, description, password) {
    this.tags = tags;
    this.title = title;
    this.nickname = nickname;
    this.styleComponent = styleComponent;
    this.description = description;
    this.password = password;
  }

  static fromInfo({
    tags,
    title,
    nickname,
    styleComponent,
    description,
    password,
  }) {
    // 태그는 최대 3개
    if (tags.length > 3) throw new BadRequestError("태그 너무 많아, 3개까지만");
    return new UnregisteredStyle(
      tags,
      title,
      nickname,
      styleComponent,
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
    styleComponent,
    description,
    password,
    createdAt,
    curationCount
  ) {
    this.id = id;
    this.tags = tags;
    this.title = title;
    this.nickname = nickname;
    this.styleComponent = styleComponent;
    this.description = description;
    this.password = password;
    this.createdAt = createdAt;
    this.curationCount = curationCount;
  }

  static fromEntity({
    id,
    tags,
    title,
    nickname,
    categories,
    description,
    password,
    created_at: createdAt,
    _count,
  }) {
    // 태그는 최대 3개
    if (tags.length > 3) throw new BadRequestError("태그 너무 많아, 3개까지만");
    const curationCount = _count ? _count.curations : 0;

    let styleComponentInstances = {};
    if (categories && categories === "object") {
      Object.entries(categories).forEach(([key, value]) => {
        styleComponentInstances[key] = StyleComponent.fromEntity({
          category: key,
          clothName: value.name,
          brandName: value.brand,
          price: value.price,
        });
      });
    }

    return new Style(
      id,
      tags,
      title,
      nickname,
      styleComponentInstances,
      description,
      password,
      createdAt,
      curationCount
    );
  }
}

// **스타일 수정**

// - 비밀번호를 입력하여 스타일 등록 시 입력했던 비밀번호와 일치할 경우 스타일 수정이 가능합니다.

// **스타일 삭제**

// - 비밀번호를 입력하여 스타일 등록 시 입력했던 비밀번호와 일치할 경우 스타일 삭제가 가능합니다.

// **스타일 목록 조회**

// - 갤러리
//     - 등록된 스타일 목록을 조회할 수 있습니다.
//     - 각 스타일의 대표 이미지, 제목, 닉네임, 태그, 스타일 구성, 스타일 설명, 조회수, 큐레이팅 수가 표시됩니다.
//     - 갤러리 상단에 인기 태그가 표시됩니다. 해당 태그를 클릭하면 그 태그에 해당하는 스타일 목록이 표시됩니다.
//     - 페이지네이션이 가능합니다.
//     - 최신순, 조회순, 큐레이팅순(큐레이팅 많은 순)으로 정렬 가능합니다.
//     - 닉네임, 제목, 상세, 태그로 검색이 가능합니다.
// - 랭킹
//     - 전체, 트렌디, 개성, 실용성, 가성비 기준으로 스타일 랭킹 목록을 조회할 수 있습니다.
//     - 각 스타일의 대표 이미지, 제목, 닉네임, 태그, 스타일 구성, 조회수, 큐레이팅수가 표시됩니다.
//     - 페이지네이션이 가능합니다.

// **스타일 상세 조회**

// - 갤러리, 랭킹에서 스타일을 클릭할 경우 스타일 상세 조회가 가능합니다.
// - 이미지(여러장 가능), 제목, 닉네임, 태그, 스타일 구성, 스타일 설명, 조회수, 큐레이팅수가 표시됩니다.
// - 해당 스타일의 큐레이팅 목록이 표시됩니다.
