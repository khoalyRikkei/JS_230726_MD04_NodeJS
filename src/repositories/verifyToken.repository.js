const { getDataById } = require("../utils/dbMethod");
const User = require("../models/user.model");
class verifyTokenRepository {
  async getInfoUser(user_id) {
    try {
      return await getDataById(user_id, User);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new verifyTokenRepository();
