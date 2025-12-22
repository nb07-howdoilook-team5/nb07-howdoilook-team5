import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";
import router from "./router/router.js";
import { config } from "dotenv";
config(); // .env 읽어서 process.env.아래 위치시키기

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
app.use(errorHandler);

const apiPort = process.env.API_PORT; // 읽어온 port 설정
app.listen(apiPort, () => {
  console.log(`떴다 ${apiPort}`);
});
