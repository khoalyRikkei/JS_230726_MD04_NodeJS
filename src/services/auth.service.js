const { hashPassword, comparePassword } = require("../utils/commonFunc");
const { createAccessToken, createRefreshToken } = require("../utils/jwt");
require("dotenv").config();
const authRepository = require("../repositories/auth.repository");

const { CustomException } = require("../expeiptions");
class AuthService {
  async register(model) {
    const IsExistEmail = await authRepository.checkUserInDB(model.email);
    if (IsExistEmail) throw new CustomException("already registered", 400);
    const passHash = await hashPassword(model.password, 12);
    const newUser = { ...model, password: passHash };
    const createUser = await authRepository.insertUser(newUser);
    return createUser;
  }
  async login(model) {
    const users = await authRepository.getAllUser();
    if (!users || !users.length) {
      throw new CustomException("No users found", 500);
    }

    const user = users.find((user) => user.email === model.email);

    if (!user) {
      throw new CustomException("Email not found", 404);
    }

    if (user.status == 0) {
      throw new CustomException("Email is block", 403);
    }

    const isPasswordValid = await comparePassword(model.password, user.password);

    if (!isPasswordValid) {
      throw new CustomException("Incorrect password", 404);
    }

    // Đăng nhập thành công

    const userLogin = {
      id: user.id,
      role: user.role,
    };

    //tạo access token
    const SECRET_ACCESSTOKEN_KEY = process.env.SECRET_ACCESSTOKEN_KEY;
    const accessToken = createAccessToken(userLogin, SECRET_ACCESSTOKEN_KEY);

    //tạo refresh token
    const SECRET_REFRESHTOKEN_KEY = process.env.SECRET_REFRESHTOKEN_KEY;
    const refreshToken = createRefreshToken(userLogin, SECRET_REFRESHTOKEN_KEY);

    const token = {
      ac_token: accessToken,
      ac_refreshToken: refreshToken,
    };

    return token;
  }
  logout() {}
}
module.exports = new AuthService();
