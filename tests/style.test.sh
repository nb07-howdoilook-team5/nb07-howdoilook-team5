#!/bin/bash

# ==========================================
# [설정] 환경 변수 및 헬퍼 함수
# ==========================================
set -uo pipefail

BASE_URL="http://localhost:3000"
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# 임시 파일 정리 트랩
trap "rm -f response.json" EXIT

# 테스트 실행 함수 (성공/실패 케이스 모두 처리 가능)
exec_test() {
  local METHOD=$1
  local URL=$2
  local DATA=$3
  local EXPECTED_CODE=${4:-200}
  local DESCRIPTION=$5

  echo -n "Running: $DESCRIPTION ... "

  if [ -z "$DATA" ]; then
    HTTP_CODE=$(curl -s -o response.json -w "%{http_code}" -X "$METHOD" "$BASE_URL$URL")
  else
    HTTP_CODE=$(curl -s -o response.json -w "%{http_code}" -X "$METHOD" "$BASE_URL$URL" \
      -H "Content-Type: application/json" -d "$DATA")
  fi

  if [ "$HTTP_CODE" -eq "$EXPECTED_CODE" ]; then
    echo -e "${GREEN}✅ PASS ($HTTP_CODE)${NC}"
  else
    echo -e "${RED}❌ FAIL${NC}"
    echo -e "${YELLOW}Expected: $EXPECTED_CODE, Got: $HTTP_CODE${NC}"
    echo "⬇️  Response Body ⬇️"
    if command -v jq &> /dev/null; then
        cat response.json | jq .
    else
        cat response.json
    fi
    echo ""
    # 실패 시 스크립트 중단 옵션 (주석 처리 시 계속 진행)
    # exit 1 
  fi
}

echo "🚀 [Style API] 상세 검증 테스트 시작 (Edge Case 포함)"
echo "------------------------------------------------------------"

# ==========================================
# 1. 스타일 등록 검증 (POST /styles)
# ==========================================

# 1-1. [실패] 필수 필드(imageUrls) 누락
INVALID_BODY_1='{
  "nickname": "BadUser",
  "password": "password123",
  "title": "이미지 없음",
  "content": "Fail content",
  "categories": { "top": { "brand": "N", "name": "T", "price": 100 } }
}'
exec_test "POST" "/styles" "$INVALID_BODY_1" 400 "등록 실패: 필수 필드 누락"

# 1-2. [실패] 비밀번호 규칙 위반 (너무 짧음)
INVALID_BODY_2='{
  "nickname": "BadUser",
  "password": "123", 
  "title": "비밀번호 짧음",
  "content": "Fail content",
  "imageUrls": ["http://a.com/1.jpg"],
  "categories": { "top": { "brand": "N", "name": "T", "price": 100 } }
}'
exec_test "POST" "/styles" "$INVALID_BODY_2" 400 "등록 실패: 비밀번호 길이 미달"

# 1-3. [실패] 태그 개수 초과 (최대 3개)
INVALID_BODY_3='{
  "nickname": "BadUser",
  "password": "password123",
  "title": "태그 과다",
  "content": "Too many tags",
  "imageUrls": ["http://a.com/1.jpg"],
  "tags": ["#1", "#2", "#3", "#4"],
  "categories": { "top": { "brand": "N", "name": "T", "price": 100 } }
}'
exec_test "POST" "/styles" "$INVALID_BODY_3" 400 "등록 실패: 태그 개수 초과"

# 1-4. [성공] 정상 등록
VALID_BODY='{
  "nickname": "DetailTester",
  "password": "password123",
  "title": "상세 테스트용 스타일",
  "content": "검색 테스트 키워드: UniqueKeyword",
  "categories": {
    "top": { "brand": "Nike", "name": "Hoodie", "price": 59000 },
    "bottom": { "brand": "Adidas", "name": "Pants", "price": 45000 }
  },
  "tags": ["#test", "#detailed"],
  "imageUrls": ["http://img.com/style1.jpg"]
}'
exec_test "POST" "/styles" "$VALID_BODY" 201 "정상 등록"

STYLE_ID=$(jq -r '.id' response.json)
echo "👉 Created Style ID: $STYLE_ID"
echo ""

# ==========================================
# 2. 목록 조회 및 검색 검증 (GET /styles)
# ==========================================

# 2-1. [성공] 닉네임 검색
exec_test "GET" "/styles?searchBy=nickname&keyword=DetailTester" "" 200 "검색: 닉네임 일치"
CHECK_NICK=$(jq ".data[] | select(.id == \"$STYLE_ID\") | .nickname" response.json)
if [[ "$CHECK_NICK" != *"DetailTester"* ]]; then echo -e "${RED}⚠️ 닉네임 검색 결과 불일치${NC}"; fi

# 2-2. [성공] 태그 검색 (파라미터 tag 사용)
exec_test "GET" "/styles?searchBy=tag&keyword=%23detailed" "" 200 "검색: 태그 일치"

# 2-3. [성공] 정렬 파라미터 확인 (에러 안 나는지)
exec_test "GET" "/styles?sortBy=mostViewed&page=1&pageSize=5" "" 200 "조회: 조회수순 정렬 요청"

# 2-4. [성공] 페이지네이션 (범위 밖 페이지)
exec_test "GET" "/styles?page=9999&pageSize=10" "" 200 "조회: 빈 페이지 (Empty Data)"
DATA_LEN=$(jq '.data | length' response.json)
if [ "$DATA_LEN" -ne 0 ]; then echo -e "${RED}⚠️ 빈 페이지여야 하는데 데이터가 있습니다.${NC}"; fi
echo ""

# ==========================================
# 3. 상세 조회 검증 (GET /styles/{id})
# ==========================================

# 3-1. [실패] 존재하지 않는 ID 조회
exec_test "GET" "/styles/99999999" "" 404 "상세 조회 실패: 없는 ID"

# 3-2. [성공] 정상 조회 및 조회수 증가 확인
exec_test "GET" "/styles/$STYLE_ID" "" 200 "상세 조회 (1회차)"
VIEW_1=$(jq -r '.viewCount' response.json)
exec_test "GET" "/styles/$STYLE_ID" "" 200 "상세 조회 (2회차)"
VIEW_2=$(jq -r '.viewCount' response.json)

if [ "$VIEW_2" -gt "$VIEW_1" ]; then
    echo -e "${GREEN}✅ 조회수 증가 확인 ($VIEW_1 -> $VIEW_2)${NC}"
else
    echo -e "${RED}❌ 조회수 증가 실패${NC}"
fi
echo ""

# ==========================================
# 4. 수정 검증 (PUT /styles/{id})
# ==========================================

# 4-1. [실패] 비밀번호 불일치 (권한 없음 -> 404 Not Found 처리됨)
WRONG_PW_BODY='{
  "password": "wrongpassword123",
  "nickname": "DetailTester",
  "title": "수정 시도",
  "content": "Updated Content",
  "imageUrls": ["http://img.com/style1.jpg"],
  "categories": { "top": { "brand": "Nike", "name": "Hoodie", "price": 59000 } }
}'
exec_test "PUT" "/styles/$STYLE_ID" "$WRONG_PW_BODY" 403 "수정 실패: 비밀번호 틀림 (403)"

# 4-2. [실패] 유효성 검사 실패 (필수값 누락)
INVALID_UPDATE_BODY='{
  "password": "password123",
  "title": ""
}'
exec_test "PUT" "/styles/$STYLE_ID" "$INVALID_UPDATE_BODY" 400 "수정 실패: 제목 누락"

# 4-3. [성공] 정상 수정
VALID_UPDATE_BODY='{
  "password": "password123",
  "nickname": "DetailTester",
  "title": "수정된 완벽한 제목",
  "content": "Updated Content",
  "imageUrls": ["http://img.com/new.jpg"],
  "categories": { "top": { "brand": "Nike", "name": "NewShirt", "price": 40000 } },
  "tags": ["#new"]
}'
exec_test "PUT" "/styles/$STYLE_ID" "$VALID_UPDATE_BODY" 200 "정상 수정"

# 수정 결과 확인
CHECK_TITLE=$(jq -r '.title' response.json)
if [[ "$CHECK_TITLE" == "수정된 완벽한 제목" ]]; then echo -e "${GREEN}✅ 수정 데이터 반영 확인${NC}"; fi
echo ""

# ==========================================
# 5. 랭킹 조회 검증 (GET /ranking)
# ==========================================

# 5-1. [성공] 다양한 랭킹 기준 요청
exec_test "GET" "/ranking?rankBy=trendy" "" 200 "랭킹: 트렌디순"
exec_test "GET" "/ranking?rankBy=costEffectiveness" "" 200 "랭킹: 가성비순"
echo ""

# ==========================================
# 6. 삭제 검증 (DELETE /styles/{id})
# ==========================================

# 6-1. [실패] 비밀번호 틀림
DELETE_WRONG_PW='{ "password": "wrongpassword123" }'
exec_test "DELETE" "/styles/$STYLE_ID" "$DELETE_WRONG_PW" 403 "삭제 실패: 비밀번호 틀림 (403)"
# 6-2. [성공] 정상 삭제
DELETE_VALID='{ "password": "password123" }'
exec_test "DELETE" "/styles/$STYLE_ID" "$DELETE_VALID" 200 "정상 삭제"

# 6-3. [실패] 이미 삭제된 데이터 재삭제 시도
exec_test "DELETE" "/styles/$STYLE_ID" "$DELETE_VALID" 404 "재삭제 실패: 이미 없음"

echo "------------------------------------------------------------"
echo -e "${GREEN}🎉 상세 시나리오 테스트 완료!${NC}"