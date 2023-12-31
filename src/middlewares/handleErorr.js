import {
  AuthencationException,
  ValidationException,
} from "../expeiptions/index.js";

export default function handleError(err, req, res, next) {
  console.log("Kiểm tra", err.field);
  if (!err) {
    return next();
  }

  if (
    (err instanceof AuthencationException) |
    (err instanceof ValidationException)
  ) {
    res.status(err.statusCode).json({
      message: err.message,
      errors: err.field,
    });
  }
}
