export class Curation {
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
    return new Curation(
      id.toString(),
      nickname,
      content,
      trendy,
      personality,
      practicality,
      costEffectiveness
    );
  }
}
