import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";
import router from "./router/router.js";
import { config } from "dotenv";
config(); // .env 읽어서 process.env.아래 위치시키기

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const app = express();
app.use(express.json()); // <- 이놈이 json을 object로...
app.use(cors());

// routers
app.get("/", (req, res) => {
  res.json({
    message: "RESTful API server",
    endpoints: ["/", "/"],
  });
});

app.use("/", router);
// 에러핸들링 미들웨어
//app.use(errorHandler);
app.use((err, req, res, next) => {
  // 터미널에 에러 상세 정보를 빨간색으로 출력합니다.
  console.error(
    "\x1b[31m%s\x1b[0m",
    "================ [ ERROR LOG ] ================"
  );
  console.error("🚨 에러 메시지:", err.message);
  console.error("🔍 에러 위치:", err.stack); // 어느 파일 몇 번째 줄인지 출력
  console.error(
    "\x1b[31m%s\x1b[0m",
    "==============================================="
  );

  // 기존의 500 응답 로직 (유지)
  const status = err.status || 500;
  res.status(status).json({
    status: status,
    message: err.message || "데이터 베이스 처리 중 오류 발생.",
    debug: {
      name: err.name,
    },
  });
});

const apiPort = process.env.API_PORT; // 읽어온 port 설정
app.listen(apiPort, () => {
  console.log(`떴다 ${apiPort}`);
});
