const { insertData, getData, deleteData, updateData } = require("../utils/dbMethod");
const User = require("../models/user.model");
class UserRepository {
  async getAllUser() {
    return await getData(User);
  }
  async getUserById(id) {
    const foundUser = await User.findOne({
      where: {
        id: id,
      },
      raw: true,
    });
    return foundUser;
  }
  async checkUserInDB(email) {
    const foundUser = await User.findOne({
      where: {
        email: email,
      },
      raw: true,
    });
    return foundUser;
  }
  insertUser(newUser) {
    return insertData(newUser, User);
  }
  async updateUser(id, userUpdate) {
    return await updateData(id, userUpdate, User);
  }
  async deleteUser(id) {
    return deleteData(id, User);
  }
}
module.exports = new UserRepository();
