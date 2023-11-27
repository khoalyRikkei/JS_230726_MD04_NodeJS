const {
  BadRequestException,
  AuthencationException,
  ValidationException,
  ServerException,
  CustomException,
} = require("../expeiptions");

function handleError(err, req, res, next) {
  if (!err) {
    console.log("khong co loi");
    return next();
  }
  switch (true) {
    case err instanceof AuthencationException:
      res.status(err.statusCode).json({
        message: err.message,
        errors: err.field,
      });
      break;
    case err instanceof ValidationException:
      res.status(err.statusCode).json({
        message: err.message,
        errors: err.field,
      });
      break;
    case err instanceof ServerException:
      res.status(err.statusCode).json({
        message: err.message,
        errors: err.field,
      });
      break;
    case err instanceof CustomException:
      res.status(err.statusCode).json({
        message: err.message,
        errors: err.field,
      });
      break;

    case err instanceof BadRequestException:
      res.status(err.statusCode).json({
        message: err.message,
        errors: err.field,
      });
      break;
  }
}
module.exports = handleError;
