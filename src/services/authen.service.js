const { getDataByEmail } = require("../repositories/authen.repository");

const loginService = async (users) => {
  // repository lay thong tin tu mysql kiem tra email

  const data = await getDataByEmail(users.email);
  if (data && users.password == data.password) {
    return { email: data.email, id: data.id };
  }
  throw new Error("wrong password");
};

module.exports = { loginService };
