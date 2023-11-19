const {
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
    case err instanceof ValidationException:
    case err instanceof ServerException:
    case err instanceof CustomException:
      res.status(err.statusCode).json({
        message: err.message,
        errors: err.field,
      });
      break;
  }
}
module.exports = handleError;
