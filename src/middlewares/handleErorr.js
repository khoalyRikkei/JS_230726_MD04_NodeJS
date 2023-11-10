import { UnauthorizedException } from "../exceptions/index.js";


export default function handleError(err, req, res, next) {
  if (!err) {
    return next();
  }

  if (err instanceof UnauthorizedException) {
    res.status(err.statusCode).json({
      message: err.message,
      errors: err.field,
    });
  }
}