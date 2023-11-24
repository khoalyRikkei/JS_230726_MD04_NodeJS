const bcrypt = require("bcrypt");

const hashPassword = async (password, number) => {
  return await bcrypt.hashSync(password, number);
};

const comparePassword = async (password, password2) => {
  return await bcrypt.compare(password, password2);
};

module.exports = { hashPassword, comparePassword };
