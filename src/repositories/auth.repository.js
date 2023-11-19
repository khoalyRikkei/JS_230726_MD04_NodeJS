const { insertData, getData } = require("../utils/dbMethod");
const User = require("../models/user.model");
class AuthRepository {
  async checkUserInDB(email) {
    try {
      const foundUser = await User.findOne({
        where: {
          email: email,
        },
      });
      return foundUser;
    } catch (error) {
      throw error;
    }
  }
  insertUser(model) {
    return insertData(model, User);
  }
}
module.exports = new AuthRepository();
