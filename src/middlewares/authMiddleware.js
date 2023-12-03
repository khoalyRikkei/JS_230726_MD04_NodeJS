const jwt = require("jsonwebtoken");
const { CustomException, AuthencationException } = require("../expeiptions");
const userRepository = require("../repositories/user.repository");
require("dotenv/config");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    const error = new AuthencationException("Unauthorized - Access token is missing");
    next(error);
  }

  jwt.verify(token, process.env.SECRET_ACCESSTOKEN_KEY, async (err, decoded) => {
    if (err) {
      const error = new AuthencationException("Forbidden - Access token is invalid");
      next(error);
    }

    //todo : add role
    const id = decoded.id;
    const user = await userRepository.getUserById(id);
    delete user.password;
    console.log(11111111111, user);
    req.user = user;
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
