import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";
import router from "./router/router.js";
import { config } from "dotenv";
config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "RESTful API server",
    endpoints: ["/", "/"],
  });
});

app.use("/", router);
app.use(errorHandler);

const apiPort = process.env.API_PORT;
app.listen(apiPort, "0.0.0.0", () => {
  console.log(`떴다 ${apiPort}`);
});
