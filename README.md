# How Do I Look

패션 스타일을 공유하고, 사용자들로부터 다각적인 피드백(Trendy, Personality, Practicality, Cost-Effectiveness)을 받아 랭킹을 산정하는 RESTful API 서버입니다.

## 📅 프로젝트 개요

- **진행 기간:** 2025.12.08 ~ 2025.12.24
- **목표:** 사용자가 패션 스타일을 등록하고, 이에 대한 구체적인 평가(Curation)를 주고받으며 트렌드를 파악할 수 있는 플랫폼 구축

## 🛠 Tech Stack

| Category         | Technology              |
| ---------------- | ----------------------- |
| **Runtime**      | Node.js                 |
| **Framework**    | Express.js              |
| **Language**     | JavaScript (ES Modules) |
| **Database**     | PostgreSQL              |
| **ORM**          | Prisma                  |
| **Validation**   | Zod                     |
| **File Storage** | Multer (Local Storage)  |

## ✨ Key Features

#### 1. Style Management (스타일 관리)

- **이미지 업로드:** Multer를 활용한 다중 이미지 업로드 및 로컬 스토리지 관리
- **카테고리 및 태그:** 의상 정보(Brand, Price 등) JSON 저장 및 다중 태그 필터링
- **익명성 보장:** 별도의 회원가입 없이 게시물별 비밀번호를 통한 수정/삭제 권한 관리

#### 2. Curation System (평가 시스템)

- **4-Metric Rating:** Trendy(트렌디), Personality(개성), Practicality(실용성), Cost-Effectiveness(가성비) 4가지 지표로 스타일 평가
- **Nested Comments:** 큐레이션에 대한 대댓글(Comment) 기능 지원

#### 3. Ranking Algorithm (랭킹 시스템)

- **실시간 집계:** Prisma Aggregation을 활용하여 각 스타일의 평균 점수 계산
- **다양한 정렬 기준:** 종합 점수(Total) 및 각 항목별(Trendy, Practicality 등) 상위 스타일 랭킹 조회 기능

#### 4. Core Tech Implementation

- **Robust Error Handling:** `asyncHandler` 및 중앙 집중식 에러 핸들링 미들웨어 (`middleware/errorHandler.js`)
- **Data Validation:** Zod 스키마를 활용한 엄격한 Request Body 검증 (`controller/models.js`)

## 📂 Project Structure

본 프로젝트는 유지보수성과 확장성을 고려하여 **Layered Architecture**를 채택했습니다.

```text
📦 Project Root
├── 📂 controller    # 요청 처리 및 응답 포맷팅 (Validation 적용)
├── 📂 domain        # 도메인 모델 및 엔티티 로직
├── 📂 repository    # DB 접근 계층 (Prisma Client 활용)
├── 📂 router        # API 라우팅 정의
├── 📂 middleware    # 에러 핸들링 등 공통 미들웨어
├── 📂 utils         # 공통 유틸 함수
├── 📂 error         # 커스텀 에러 클래스 정의
└── 📂 uploads       # 업로드된 이미지 저장소
```

## 🚀 Getting Started

### 1. Prerequisites

서비스 실행을 위해 다음 환경이 필요합니다.

- **Node.js**: v18 이상
- **Database**: PostgreSQL

### 2. Installation & Setup

**1) Repository Clone**

```bash
git clone https://github.com/nb07-howdoilook-team5/nb07-howdoilook-team5.git

```

**2) Install Dependencies**

```bash
npm install
```

**3) Environment Setup**
프로젝트 루트에 .env 파일을 생성하고 아래 내용을 입력합니다.

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
API_PORT=3000
BASE_URL="http://localhost:3000"
```

**4) Database Setup (Prisma)**
데이터베이스 스키마를 동기화하고 클라이언트를 생성합니다.

```bash
npx run prisma:generate
npx run prisma:push
```

**5) Run Server**

```bash
npm start
```

## 📂 API Documentation (Summary)

| Method        | Endpoint                  | Description                            |
| :------------ | :------------------------ | :------------------------------------- |
| **Styles**    |                           |                                        |
| `GET`         | `/styles`                 | 스타일 목록 조회 (검색, 정렬 지원)     |
| `POST`        | `/styles`                 | 새로운 스타일 등록                     |
| `GET`         | `/styles/ranking`         | 큐레이션 점수 기반 랭킹 조회           |
| `GET`         | `/styles/:id`             | 스타일 상세 조회                       |
| **Curations** |                           |                                        |
| `POST`        | `/styles/:id/curations`   | 특정 스타일에 대한 큐레이팅(평가) 등록 |
| `GET`         | `/styles/:id/curations`   | 특정 스타일의 큐레이팅 목록 조회       |
| `PUT`         | `/curations/:id`          | 특정 큐레이팅 수정 (비밀번호 확인)     |
| `DELETE`      | `/curations/:id`          | 특정 큐레이팅 삭제 (비밀번호 확인)     |
| **Comments**  |                           |                                        |
| `POST`        | `/curations/:id/comments` | 큐레이팅에 대한 답글 등록              |
| **Images**    |                           |                                        |
| `POST`        | `/images`                 | 이미지 업로드 (URL 반환)               |
| `GET`         | `/images/:filename`       | 이미지 파일 조회                       |

## 🔍 Database Schema (ERD Summary)

```text
Style: 1:N Curation, 1:N StyleTag

Curation: 1:1 Comment

Tag: N:M Style (via StyleTag)
```

## 💭 Retrospective & Future Improvements

이번 프로젝트는 짧은 기간 동안 핵심 기능 구현에 집중하며 RESTful API의 구조를 잡는 데 주력했습니다. 추후 개선 사항은 다음과 같습니다.

### 🚨 아쉬운 점 및 발견된 이슈

- **코드 리뷰 및 교차 검증 부족:** 각자 맡은 기능 구현에 집중하다 보니, 다른 팀원의 코드 로직을 깊이 있게 검토하고 피드백을 주고받는 과정이 부족했습니다.
- **비정형화된 작업 기록:** Git 커밋 메시지를 규칙 없이 작성하고, 변경 사항을 의미 있는 단위로 분리하지 못해 히스토리 추적에 어려움이 있었습니다.
- **후행 테스트로 인한 리소스 소모:** 개발 완료 후 마지막 단계에서 전체 테스트를 진행하다 보니, 발견된 오류를 수정하는 데 예상보다 많은 시간이 소요되었습니다.

### 🔧 향후 개선 사항

- **상호 테스트를 통한 코드 이해도 제고:** 자신이 작성하지 않은 기능을 교차 테스트함으로써 팀 전체의 코드 이해도를 높이고 잠재적인 버그를 조기에 발견하겠습니다.
- **프로세스 표준화:** 표준 커밋 메시지(Conventional Commits)와 코드 컨벤션을 프로젝트 초기 단계부터 엄격히 적용하여 협업과 유지보수에 최적화된 환경을 구축하겠습니다.
- **테스트 주도적 접근:** 개발 중간 단계마다 유닛 테스트를 병행하여 수정 시간을 단축하고, 소프트웨어의 안정성을 확보하는 습관을 기르겠습니다.
