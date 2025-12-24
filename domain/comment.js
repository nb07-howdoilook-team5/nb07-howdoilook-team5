export class CurationComment {
  constructor(id, nickname, content) {
    this.id = id;
    this.nickname = nickname;
    this.content = content;
  }
  static fromEntity(commentEntity) {
    const info = {
      id: commentEntity.id.toString(),
      nickname: commentEntity.curation.style.nickname, // todo: schema relations
      content: commentEntity.content,
    };
    //validateCurationCommentInfo(info);

    return new CurationComment(info.id, info.nickname, info.content);
  }
}
// export class UnregisteredCurationComment {
//   constructor(curationId, content, password) {
//     this.curationId = curationId;
//     this.content = content;
//     this.password = password;
//   }

//   static fromRequest(curationId, content, password) {
//     return new UnregisteredCurationComment(curationId, content, password);
//   }

//   // db쪽으로 이동
//   // toCreateData() {
//   //   return {
//   //     curation_id: this.curationId,
//   //     content: this.content,
//   //     password: this.password,
//   //   };
//   // }

//   // toUpdateData() {
//   //   return {
//   //     content: this.content,
//   //   };
//   // }
// }
