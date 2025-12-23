import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { PrismaClient } = require("../generated/prisma/index.js");

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import pkg from "pg";
import {
  HttpError,
  BadRequestError,
  NotFoundError,
  InternalServerError,
} from "../../error/errors.js";

const connectionString = process.env.DATABASE_URL;
const pool = new pkg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({
  adapter,
  log: ["query", "error", "info", "warn"],
});

const throwHttpError = (queryFn, option) => {
  return queryFn(option).catch((prismaErr) => {
    if (prismaErr.code) {
      switch (prismaErr.code) {
        case "P2002":
          throw new BadRequestError("이미 존재하는 데이터입니다.");
        case "P2025":
          throw new NotFoundError("데이터를 찾을 수 없습니다.");
        case "P2003":
          throw new BadRequestError("유효하지 않은 ID입니다.");
        default:
          throw new InternalServerError("데이터 베이스 처리 중 오류 발생.");
      }
    }
    throw prismaErr;
  });
};

export { prisma, throwHttpError };
