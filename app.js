import express from "express";
import cors from "cors";
import articleRouter from "./router/article.route.js";
import errorHandler from "./middlewares/errorHandler.js";

import { config } from "dotenv";
import productRouter from "./router/product.route.js";
config(); // .env 읽어서 process.env.아래 위치시키기

const app = express();
app.use(express.json()); // <- 이놈이 json을 object로...
app.use(cors());

// routers
app.use("/articles", articleRouter);
app.use("/products", productRouter);
app.get("/", (req, res) => {
  res.json({
    message: "RESTful API server",
    endpoints: ["/products", "/articles"],
  });
});

// 에러핸들링 미들웨어
app.use(errorHandler);

const apiPort = process.env.API_PORT; // 읽어온 port 설정
app.listen(apiPort, () => {
  console.log(`떴다 ${apiPort}`);
});
