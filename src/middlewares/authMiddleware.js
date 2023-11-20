const jwt = require("jsonwebtoken");
const { CustomException } = require("../expeiptions");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Lấy token từ header Authorization

  if (!token) {
    throw new CustomException("Unauthorized - Access token is missing", 401);
  }

  jwt.verify(token, "your_access_token_secret", (err, decoded) => {
    if (err) {
      throw new CustomException("Forbidden - Access token is invalid", 403);
    }

    req.user = decoded; // Lưu thông tin user vào request để sử dụng trong các xử lý tiếp theo
    next();
  });
}

function checkUserRole(role) {
  return (req, res, next) => {
    const user = req.user;

    if (!user || user.role !== role) {
      throw new CustomException("Forbidden - Insufficient permissions", 403);
    }

    next();
  };
}

module.exports = {
  authenticateToken,
  checkUserRole,
};
