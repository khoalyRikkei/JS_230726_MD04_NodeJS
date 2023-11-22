const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateAccessToken = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      roleId: user.roleId,
    },
    process.env.ACCESS_TOKEN_SCERET
  );

  return token;
};
module.exports = {
  generateAccessToken,
};
