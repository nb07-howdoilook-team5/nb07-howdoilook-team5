// ### 답글
// **답글 등록**
// - 답글 내용과 비밀번호를 입력하여 답글을 등록합니다. 비밀번호가 스타일 등록 시 입력했던 비밀번호와 일치하면 답글이 등록됩니다.
// - 답글은 큐레이팅 당 하나만 등록 가능합니다.
// **답글 수정**
// - 비밀번호를 입력하여 답글 등록 시 입력했던 비밀번호와 일치할 경우 답글 수정이 가능합니다.
// **답글 삭제**
// - 비밀번호를 입력하여 답글 등록 시 입력했던 비밀번호와 일치할 경우 답글 삭제가 가능합니다.
// **답글 목록 조회**
// - 큐레이팅을 조회할 경우 그 큐레이팅에 해당되는 답글도 같이 조회됩니다.
// - 닉네임, 답글 내용이 표시됩니다.
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
    validateCurationCommentInfo(info);
    // 출입국 심사... imigration입니다...

    return new CurationComment(info.id, info.nickname, info.content);
  }
}
export class UnregisteredCurationComment {
  constructor(curationId, content, password) {
    this.curationId = curationId;
    this.content = content;
    this.password = password;
  }

  static fromRequest(curationId, content, password) {
    return new UnregisteredCurationComment(curationId, content, password);
  }

  // db쪽으로 이동
  // toCreateData() {
  //   return {
  //     curation_id: this.curationId,
  //     content: this.content,
  //     password: this.password,
  //   };
  // }

  // toUpdateData() {
  //   return {
  //     content: this.content,
  //   };
  // }
}
