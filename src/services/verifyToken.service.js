const verifyTokenRepository = require("../repositories/verifyToken.repository");
class VerifyService {
  getInfoUser(model) {
    try {
      return verifyTokenRepository.getInfoUser(model.user_id);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new VerifyService();
