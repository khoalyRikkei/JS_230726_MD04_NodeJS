const { hashPassword, comparePassword } = require("../utils/commonFunc");
const { createAccessToken } = require("../utils/jwt");
require("dotenv").config();
const userRepository = require("../repositories/user.repository");

const { CustomException } = require("../expeiptions");
class UserService {
  async register(model) {
    const IsExistEmail = await userRepository.checkUserInDB(model.email);
    if (IsExistEmail) throw new CustomException("already registered", 400);
    const passHash = await hashPassword(model.password, 12);
    const newUser = { ...model, password: passHash };
    const createUser = await userRepository.insertUser(newUser);
    return createUser;
  }
  async login(model) {
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

    //tạo access token
    const SECRET_ACCESSTOKEN_KEY = process.env.SECRET_ACCESSTOKEN_KEY;
    const accessToken = createAccessToken(userLogin, SECRET_ACCESSTOKEN_KEY);

    //tạo refresh token
    // const SECRET_REFRESHTOKEN_KEY = process.env.SECRET_REFRESHTOKEN_KEY;
    // const refreshToken = createRefreshToken(userLogin, SECRET_REFRESHTOKEN_KEY);

    return {
      user: user,
      token: accessToken,
    };
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
  updateUser(model) {
    return userRepository.updateUser(model.id, model.newUser);
  }
  updateStatusUser(model) {
    return userRepository.updateStatusUser(model.id, model.newUser);
  }
  // deleteUser(id) {
  //   return userRepository.deleteUser(id);
  // }
}
module.exports = new UserService();
