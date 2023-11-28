const { verifyToken } = require("../utils/jwt");

const checkAdmin = (req, res, next) => {
  const tokenBeare = req.headers["authorization"];
  const token = tokenBeare ? tokenBeare.split(" ")[1] : undefined;
  try {
    const decode = verifyToken(token);
    if (decode.role === "admin") {
      req.userId = decode.userId;
      req.role = decode.role;
      next();
    } else {
      res.status(401).json({ message: "Access is denied" });
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.checkAdmin = checkAdmin;
