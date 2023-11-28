const { getDataByEmail } = require("../repositories/authen.repository");

const loginService = async (users) => {
  // repository lay thong tin tu mysql kiem tra email
  const data = await getDataByEmail(users.email);
  if (data && users.password == data.password) {
    delete data.password;
    return data;
  }
  throw { statusCode: 400, message: "Password is incorrect" };
};

module.exports = { loginService };
