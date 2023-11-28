const jwt = require("jsonwebtoken");
const { CustomException } = require("../expeiptions");
require("dotenv/config");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    const error = new CustomException("Unauthorized - Access token is missing", 401);
    next(error);
  }

  jwt.verify(token, process.env.SECRET_ACCESSTOKEN_KEY, (err, decoded) => {
    if (err) {
      const error = new CustomException("Forbidden - Access token is invalid");
      next(error);
    }
    req.user = decoded;
    console.log(decoded);
    next();
  });
}

function checkUserRole(role) {
  return (req, res, next) => {
    const user = req.user;

    if (!user || user.role !== role) {
      const err = new CustomException("Forbidden - Insufficient permissions");
      next(err);
    }

    next();
  };
}

module.exports = {
  authenticateToken,
  checkUserRole,
};
