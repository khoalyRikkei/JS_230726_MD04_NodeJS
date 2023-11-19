const authRepository = require("../repositories/auth.repository");

class AuthService {
  async register(model) {
    try {
      const response = await authRepository.checkUserInDB(model.email);
      if (response == null) {
        const createUser = await authRepository.insertUser(model);
        if (createUser) {
          return createUser;
        }
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }
  login() {}
  logout() {}
}
module.exports = new AuthService();
