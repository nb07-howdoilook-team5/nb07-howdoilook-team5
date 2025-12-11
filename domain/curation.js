import { BadRequestError } from "../error/errors.js";

export class UnregisteredCuration {
  // 닉네임, 트렌디,개성,가성비점수,한줄 큐레이팅,비밀번호
  constructor(
    nickname,
    content,
    trendy,
    personality,
    practicality,
    costEffectiveness,
    password
  ) {
    this.nickname = nickname;
    this.content = content;
    this.trendy = trendy;
    this.personality = personality;
    this.practicality = practicality;
    this.costEffectiveness = costEffectiveness;
    this.password = password;
  }

  static fromInfo({
    nickname,
    content,
    trendy,
    personality,
    practicality,
    costEffectiveness,
    password,
  }) {
    return new UnregisteredCuration(
      nickname,
      content,
      trendy,
      personality,
      practicality,
      costEffectiveness,
      password
    );
  }
}

// 큐레이팅 등록
export class Curation {
  // 닉네임, 트렌디,개성,가성비점수,한줄 큐레이팅,비밀번호
  constructor(
    id,
    nickname,
    content,
    trendy,
    personality,
    practicality,
    costEffectiveness
  ) {
    this.id = id;
    this.nickname = nickname;
    this.content = content;
    this.trendy = trendy;
    this.personality = personality;
    this.practicality = practicality;
    this.costEffectiveness = costEffectiveness;
  }

  static fromEntity({
    id,
    nickname,
    content,
    trendy,
    personality,
    practicality,
    costEffectiveness,
  }) {
    // 태그는 최대 3개

    return new Curation(
      id,
      nickname,
      content,
      trendy,
      personality,
      practicality,
      costEffectiveness
    );
  }
}
// 트렌디, 개성, 실용성, 가성비 점수와 한줄 큐레이팅, 닉네임, 비밀번호를 입력하여 큐레이팅을 등록합니다.
// 큐레이팅 수정

// 비밀번호를 입력하여 큐레이팅 등록 시 입력했던 비밀번호와 일치할 경우 큐레이팅 수정이 가능합니다.
// 큐레이팅 삭제

// 비밀번호를 입력하여 큐레이팅 등록 시 입력했던 비밀번호와 일치할 경우 큐레이팅 삭제가 가능합니다.
// 큐레이팅 목록 조회

// 스타일을 조회할 경우 그 스타일에 해당되는 큐레이팅 목록이 같이 조회됩니다.
// 각 큐레이팅의 트렌디, 개성, 실용성, 가성비 점수와 한줄 큐레이팅, 닉네임이 표시됩니다.
// 닉네임, 내용으로 검색이 가능합니다.
// 큐레이팅에 남겨진 답글도 같이 조회됩니다.
