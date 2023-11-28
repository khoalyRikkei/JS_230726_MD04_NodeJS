const jwt = require("jsonwebtoken");

const createToken = (data) => {
  return jwt.sign(data, "viendeptrai", { expiresIn: "2h" });
};

const verifyToken = (token) => {
  console.log(token);
  try {
    const decoded = jwt.verify(token, "viendeptrai");
    return decoded;
  } catch (err) {
    // console.log(111, err);
    throw {
      statusCode: 401,
      message: "Token is invalid or expired",
    };
    // err
  }
};

module.exports = { createToken, verifyToken };
