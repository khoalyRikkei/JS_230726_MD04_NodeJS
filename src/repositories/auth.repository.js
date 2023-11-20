const { insertData, getData } = require("../utils/dbMethod");
const User = require("../models/user.model");
class AuthRepository {
  async getAllUser() {
    try {
      return await getData(User);
    } catch (error) {
      throw error;
    }
  }
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
