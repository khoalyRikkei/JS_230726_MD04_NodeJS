const connection = require("../configs/db.config");
const { loginService, testData } = require("../services/authen.service");
const { createToken } = require("../utils/jwt");

const login = async (req, res) => {
  const userLogin = { ...req.body };
  console.log(userLogin);

  try {
    const ret = await loginService(userLogin);

    const token = createToken({ userId: ret.id, role: ret.role });
    res.setHeader("Authorization", "Bearer " + token);

    // Additional logic based on the successful login
    res.status(200).json({ message: "Login success", data: ret });
  } catch (error) {
    console.log(error);
    res.status(error.statusCode).json({ message: error.message });
  }
};

module.exports = { login };
