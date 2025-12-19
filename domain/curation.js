import { CurationComment } from "./comment.js";

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
    cost_effectiveness,
  }) {
    return new Curation(
      id,
      nickname,
      content,
      trendy,
      personality,
      practicality,
      cost_effectiveness
    );
  }
}
