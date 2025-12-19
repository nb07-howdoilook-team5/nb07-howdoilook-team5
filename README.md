# How Do I Look – 5Team

(팀 협업 문서 링크 게시)

5팀
구창민
장인혁
강혜림

# 프로젝트 소개

- 제목: How Do I Look
- 소개: 스타일 공유 및 큐레이팅 서비스
- **프로젝트 기간**
- 2025.12.08(월) 09시 ~ 2025.12.24(목) 18시
- 발표 날짜
- 중간 발표: 12월 16일(화) 13시
- 최종 발표: 12월 24일(목) 13시

# 기술 스택

- Backend: Express.js, PrismaORM
- Database: PostgeSQL
- 공통 Tool: Git & Github, Discord, notion

# 팀원 & 역할 분담

프로젝트는 **3명의 팀원이 명확한 도메인 단위로 나누어 작업**합니다.

| 팀원                              | 담당 영역                              | 상세 역할 |
| --------------------------------- | -------------------------------------- | --------- |
| **구창민– 스타일, 객체지향(OOP)** | 스타일 도메인, 프리즈마 스키마         |
| **장인혁– 큐레이팅, 에러 처리**   | 큐레이팅 로직, 전역 에러 시스템 , 랭킹 |
| **강혜림– 답글, ORM**             | 댓글/비밀번호 기능 , 이미지            |

# 파일 구조

```
.
├── .devcontainer/
│   └── devcontainer.json          # 개발 컨테이너 설정
│
├── controller/                    # 요청 흐름 제어 (req → service/repo → res)
│   ├── comment.controller.js
│   ├── curation.controller.js
│   └── models.js                  # controller 단에서 쓰는 DTO/요청 모델
│
├── domain/                        # 도메인 모델 (비즈니스 개념)
│   ├── comment.js
│   ├── curation.js
│   ├── style.js
│
├── error/                         # 에러 정의
│   └── errors.js                  # HttpError, BadRequestError 등
│
├── middleware/                    # Express 미들웨어
│   └── errorHandler.js            # 전역 에러 핸들러
│
├── repository/                    # DB 접근 계층
│   ├── prisma/
│   │   ├── migrations/            # Prisma 마이그레이션
│   │   ├── prisma.js              # Prisma client
│   │   └── schema.prisma          # DB 스키마
│   │
│   ├── comment.repository.js
│   └── curation.repository.js
│
├── router/                        # 라우팅 계층 (URL ↔ controller 연결)
│   ├── comment.router.js
│   ├── curation.router.js
│   ├── style.router.js
│   └── router.js                  # 루트 라우터 통합
│
├── utils/                         # 공통 유틸
│   ├── asyncHandler.js             # async 에러 래핑
│   └── cursor-pagination.js        # 커서 기반 페이지네이션
│
├── node_modules/
│
└── prisma.config.ts                # Prisma 설정 (TS)

```

# Git 협업 규칙

⚠️ 팀 규칙

**main 작업 , PR 본인이 머지 금지**

# 브랜치 전략

```
main        ← 최종 제출용
dev         ← 팀 통합 브랜치

개인작업브랜치
feature/changmin
feature/inhyuk
feature/hyelim
```

# git 협업가이드

커밋메세지 규칙

```
ex) feat: 기능 추가
```

PR 제목 형식:

```
feat: 스타일 등록 기능 추가
feat: 큐레이팅 API 구현
feat: 답글 삭제 기능 추가
```

PR 설명 템플릿:

```
### 작업 내용
- 무엇을 개발했는지

### 테스트 방법
- 테스트 내용

### 리뷰 요청
- 확인 부탁하고 싶은 부분
```

# 충돌 최소화 전략

- 각자 도메인(스타일 / 큐레이팅 / 답글) 외 파일 수정 지양
- 작업 전 항상 최신 코드 pull:
  ```bash
  git pull origin dev
  ```
- 기능 단위로 작은 PR을 자주 보냄

# 구현 홈페이지

(개발한 홈페이지에 대한 링크 게시)

https://www.codeit.kr/

# 프로젝트 회고록

(제작한 발표자료 링크 혹은 첨부파일 첨부)
