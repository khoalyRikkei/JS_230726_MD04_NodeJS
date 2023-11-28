const { hashPassword, comparePassword } = require("../utils/commonFunc");
const { createAccessToken } = require("../utils/jwt");
require("dotenv").config();
const userRepository = require("../repositories/user.repository");

const { CustomException } = require("../expeiptions");
class UserService {
  async register(model) {
    const IsExistEmail = await userRepository.checkUserInDB(model.email);
    if (IsExistEmail)
      throw new CustomException("already registered", 400, { msgEmail: "already registered" });
    const passHash = await hashPassword(model.password, 12);
    const newUser = { ...model, password: passHash };
    const createUser = await userRepository.insertUser(newUser);
    return createUser;
  }
  async login(model) {
    try {
      const users = await userRepository.getAllUser();
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
        email: user.email,
        id: user.id,
      };
      //tạo access token
      const SECRET_ACCESSTOKEN_KEY = process.env.SECRET_ACCESSTOKEN_KEY;
      const accessToken = createAccessToken(userLogin, SECRET_ACCESSTOKEN_KEY);
      //tạo refresh token
      // const SECRET_REFRESHTOKEN_KEY = process.env.SECRET_REFRESHTOKEN_KEY;
      // const refreshToken = createRefreshToken(userLogin, SECRET_REFRESHTOKEN_KEY);
      delete user.password;
      const response = {
        token: accessToken,
        user: user,
      };

      return response;
    } catch (error) {
      throw error;
    }
  }
  getAllUser(model) {
    try {
      if (!model) {
        return userRepository.getAllUser();
      }

      return userRepository.getUserByCondition(
        model.filterConditions,
        model.order,
        model.limit,
        model.offset
      );
    } catch (error) {
      throw error;
    }
  }
  getUserById(model) {
    return userRepository.getUserById(model.id);
  }
  async updateUser(model) {
    const updateUser = await userRepository.updateUser(model.id, model.newUser);
    if (!updateUser) throw new CustomException("Update User failed", 400);
    return updateUser;
  }
  async updateStatusUser(model) {
    const updateStatusUser = await userRepository.updateStatusUser(model.id, model.newUser);
    if (!updateStatusUser) throw new CustomException("Update Status User failed", 400);
    return updateStatusUser;
  }
  // deleteUser(id) {
  //   return userRepository.deleteUser(id);
  // }
}
module.exports = new UserService();
