import { AuthencationException } from "../expeiptions/expeiption.js";

export default function handleError(err, req, res, next) {
  if (!err) {
    return next();
  }

  if (err instanceof AuthencationException) {
    res.status(err.statusCode).json({
      message: err.message,
      errors: err.field,
    });
  }
}
