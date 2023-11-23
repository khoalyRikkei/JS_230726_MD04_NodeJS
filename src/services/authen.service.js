const {
  getALlUsers,
  getDataByEmail,
} = require("../repositories/authen.repository");

const loginService = async (users) => {
  // repository lay thong tin tu mysql kiem tra email

  const data = await getDataByEmail();
  if (data && users.password == data.password) {
    return { email: data.email, id: data.id };
  }
  throw new Error("wrong password");
};

const testData = async () => {
  const test = await getALlUsers();
  console.log(test, "ahihi");
};

module.exports = { loginService, testData };
