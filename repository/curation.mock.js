// src/repository/curation.mock.js

let curations = []; // 서버 메모리에 저장되는 가짜 테이블
let nextId = 1n;
export const create = async (createData) => {
  const { style_id, ...rest } = createData;
  const newEntity = {
    id: nextId++,
    ...rest,
    style_id: BigInt(style_id),
    created_at: new Date(),
  };
  curations.push(newEntity);
  return newEntity;
};

export const curationlist = async (
  styleId,
  searchBy,
  keyword,
  pageSize,
  skip
) => {
  let filtered = curations.filter((c) => c.style_id === BigInt(styleId));
  // ... (필요시 검색 로직 추가)
  return {
    totalItemCount: filtered.length,
    entities: filtered.slice(skip, skip + pageSize),
  };
};
// 2. 수정 로직
export const update = async (curationId, password, updateData) => {
  const index = curations.findIndex(
    (c) => c.id === BigInt(curationId) && c.password === password
  );
  if (index === -1) throw new Error("Curation not found or password incorrect");

  curations[index] = { ...curations[index], ...updateData };
  return curations[index];
};

// 3. 삭제 로직
export const remove = async (curationId, password) => {
  const index = curations.findIndex(
    (c) => c.id === BigInt(curationId) && c.password === password
  );
  if (index === -1) throw new Error("Curation not found or password incorrect");

  curations.splice(index, 1);
  return true;
};

// 4. 목록 조회 로직
export const list = async (styleId, searchBy, keyword, pageSize, skip) => {
  let filtered = curations.filter((c) => c.style_id === BigInt(styleId));

  if (keyword) {
    if (searchBy === "nickname")
      filtered = filtered.filter((c) => c.nickname.includes(keyword));
    else if (searchBy === "content")
      filtered = filtered.filter((c) => c.content.includes(keyword));
  }

  return {
    totalItemCount: filtered.length,
    entities: filtered.slice(skip, skip + pageSize),
  };
};
