const { verifyToken } = require("../utils/jwt");

const checkUser = (req, res, next) => {
  const tokenBeare = req.headers["authorization"];
  const token = tokenBeare ? tokenBeare.split(" ")[1] : undefined;
  try {
    const decode = verifyToken(token);
    if (decode.role === "user") {
      req.userId = decode.userId;
      req.role = decode.role;
      next();
    } else {
      res.status(401).json({ message: "Please Login with User Account" });
    }
  } catch (error) {
    res.status(401).json({ message: "Login expired" });
  }
};

exports.checkUser = checkUser;
