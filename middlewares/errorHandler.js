import { HttpError } from "../errors/customErrors.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    const status = err.status;
    return res.status(status).json({
      status: status,
      message: err.message,
    });
  }
  const status = 500;
  const message = "서버 내부 오류 발생.";
  return res.status(status).json({
    status: status,
    message: message,
  });
};

export default errorHandler;
