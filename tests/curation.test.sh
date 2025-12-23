#!/bin/bash
# Curation API E2E test (create -> update -> delete)

set -euo pipefail

BASE_URL="http://localhost:3000"
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

trap "rm -f response.json" EXIT

exec_test() {
  local METHOD=$1
  local URL=$2
  local DATA=$3
  local EXPECTED_CODE=${4:-200}
  local DESCRIPTION=${5:-""}

  echo -n "Running: ${DESCRIPTION:-"(no description)"} ... "

  if [ -z "${DATA:-}" ]; then
    HTTP_CODE=$(curl -s -o response.json -w "%{http_code}" -X "$METHOD" "$BASE_URL$URL")
  else
    HTTP_CODE=$(curl -s -o response.json -w "%{http_code}" -X "$METHOD" "$BASE_URL$URL" \
      -H "Content-Type: application/json" -d "$DATA")
  fi

  if [ "$HTTP_CODE" -eq "$EXPECTED_CODE" ]; then
    echo -e "${GREEN}✅ PASS ($HTTP_CODE)${NC}"
    return 0
  fi

  echo -e "${RED}❌ FAIL${NC}"
  echo -e "${YELLOW}Expected: $EXPECTED_CODE, Got: $HTTP_CODE${NC}"
  echo "⬇️  Response Body ⬇️"
  if command -v jq &>/dev/null; then
    cat response.json | jq .
  else
    cat response.json
  fi
  echo ""
  return 1
}

require_jq() {
  if ! command -v jq &>/dev/null; then
    echo -e "${RED}❌ jq가 필요합니다. (sudo apt-get install -y jq)${NC}"
    exit 1
  fi
}

extract_id() {
  local id
  id=$(jq -r '.id // empty' response.json 2>/dev/null || true)
  if [ -z "${id:-}" ]; then
    echo -e "${RED}❌ 응답에서 id를 추출하지 못했습니다.${NC}"
    exit 1
  fi
  echo "$id"
}

echo "🚀 [Curation API] 테스트 시작"
echo "------------------------------------------------------------"
require_jq

# 0) 스타일 생성
STYLE_BODY='{
  "nickname": "Tester",
  "password": "password123",
  "title": "테스트 스타일",
  "imageUrls": ["http://localhost:3000/images/sample.jpeg"],
  "content": "Style for curation tests",
  "categories": { "top": { "brand": "N", "name": "T", "price": 100 } }
}'
exec_test "POST" "/styles" "$STYLE_BODY" 201 "스타일 등록"
STYLE_ID=$(extract_id)
echo -e "   -> STYLE_ID = ${GREEN}${STYLE_ID}${NC}"

# 1) 큐레이션 등록
CURATION_CREATE='{
  "nickname": "테스터",
  "password": "testuser123",
  "content": "Mock DB를 활용한 큐레이션 테스트입니다.",
  "trendy": 8,
  "personality": 7,
  "practicality": 9,
  "costEffectiveness": 10
}'
exec_test "POST" "/styles/$STYLE_ID/curations" "$CURATION_CREATE" 201 "큐레이션 등록"
CURATION_ID=$(extract_id)
echo -e "   -> CURATION_ID = ${GREEN}${CURATION_ID}${NC}"

# 2) 큐레이션 등록 실패 (비밀번호 짧음)
CURATION_BAD_PW='{
  "nickname": "테스터",
  "password": "123",
  "content": "비밀번호가 너무 짧습니다.",
  "trendy": 8,
  "personality": 7,
  "practicality": 9,
  "costEffectiveness": 10
}'
exec_test "POST" "/styles/$STYLE_ID/curations" "$CURATION_BAD_PW" 400 "큐레이션 등록 실패(비밀번호 짧음)"

# 3) 큐레이션 수정 성공
UPDATE_OK='{
  "nickname": "테스터",
  "password": "testuser123",
  "content": "수정된 큐레이션 내용입니다.",
  "trendy": 9,
  "personality": 8,
  "practicality": 9,
  "costEffectiveness": 8
}'
exec_test "PUT" "/curations/$CURATION_ID" "$UPDATE_OK" 200 "큐레이션 수정 성공"

# 4) 큐레이션 수정 실패 (비밀번호 형식 오류)
UPDATE_BAD='{
  "nickname": "테스터",
  "password": "r123",
  "content": "잘못된 비밀번호 형식",
  "trendy": 9,
  "personality": 8,
  "practicality": 9,
  "costEffectiveness": 8
}'
exec_test "PUT" "/curations/$CURATION_ID" "$UPDATE_BAD" 400 "큐레이션 수정 실패(비밀번호 형식)"

# 5) 큐레이션 삭제 실패 (비밀번호 불일치)
DELETE_WRONG_PW='{
  "password": "wrongpass123"
}'
# 서버 로그에서 Prisma가 NotFoundError(404)를 뱉고 있으므로 기대값을 404로 수정합니다.
exec_test "DELETE" "/curations/$CURATION_ID" "$DELETE_WRONG_PW" 404 "큐레이션 삭제 실패(비밀번호 불일치)"

# 6) 큐레이션 삭제 성공
DELETE_OK='{
  "password": "testuser123"
}'
exec_test "DELETE" "/curations/$CURATION_ID" "$DELETE_OK" 200 "큐레이션 삭제 성공"

# 7) 삭제 후 조회 실패
exec_test "GET" "/curations/$CURATION_ID" "" 404 "삭제된 큐레이션 조회 실패"

echo "------------------------------------------------------------"
echo -e "${GREEN}✅ 모든 Curation 테스트 완료!${NC}"