const jwt = require("jsonwebtoken");

const createAccessToken = (data, secretKey, expiresIn = "7d") => {
  return jwt.sign(data, secretKey, { expiresIn });
};

// const createRefreshToken = (data, secretKey, expiresIn = "7d") => {
//   return jwt.sign(data, secretKey, { expiresIn });
// };

const verifyToken = (token, secretKey) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    return null;
  }
};

module.exports = { createAccessToken, verifyToken };
