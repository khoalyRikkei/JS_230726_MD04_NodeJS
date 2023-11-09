
import AuthRepository from "../repository/auth.repository.js";
import { validateUserData } from "../validations/user-register-validation.js";
import  jwt  from "jsonwebtoken";

const authRepository = new AuthRepository();

export default class AuthService {
  performLogin(email, password) {
    const getAllUser = authRepository.getUsers();
    const checkLoginUser = getAllUser.find(
      (user) => user.email === email && user.password === password
    );
    if (checkLoginUser) {
      delete checkLoginUser.password;

      // Tạo token
      const token = jwt.sign(checkLoginUser, process.env.SECRET_KEY);
      const successLogin = {
        statusCode: 200,
        success: true,
        message: "Đăng nhập thành công",
        userLogin: checkLoginUser,
        token: token, // Gửi token về cho người dùng
      };
      return successLogin;
    } else {
      const errorLogin = {
        statusCode: 401,
        success: false,
        message: "Email hoặc mật khẩu không đúng",
      };
      return errorLogin;
    }
  }

  performRegister(userData) {
    const validationError = validateUserData(userData);

    if (validationError) {
      return validationError;
    }
    const getAllUser = authRepository.getUsers();
    const isEmailExists = getAllUser.some(
      (user) => user.email === userData.email
    );

    if (isEmailExists) {
      const errorRegister = {
        statusCode: 409,
        success: false,
        message: "Email đã tồn tại",
      };
      return errorRegister;
    }

    const newUser = authRepository.createUser(userData);
    if (newUser) {
      const successRegister = {
        statusCode: 200,
        success: true,
        message: "Đăng ký thành công",
        userData: newUser,
      };
      return successRegister;
    } else {
      const errorRegister = {
        statusCode: 500,
        success: false,
        message: "Lỗi khi tạo người dùng mới",
      };
      return errorRegister;
    }
  }
}
