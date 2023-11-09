import AuthRepository from "../repositories/auth.repository.js";

const authRepository = new AuthRepository();

class AuthService {
  checkDataLogin(email, password) {
    const getAllUsers = authRepository.getUsers();
    let isLogined = false;
    let userLogin;
    getAllUsers.forEach((user) => {
      if (user.email === email) {
        if (user.password === password) {
          isLogined = true;
          userLogin = { ...user };
          delete userLogin.password;
        }
      }
    });
    if (isLogined) {
      return {
        status: true,
        message: "đăng nhập thành công",
        data: userLogin,
      };
    } else {
      return {
        status: false,
        message: "đăng nhập thất bại",
        data: null,
      };
    }
  }
  checkDataRegister(dataModal) {
    const getAllUsers = authRepository.getUsers();
    let isRegister = false;
    getAllUsers.forEach((user) => {
      if (user.email === dataModal.email) {
        isRegister = true;
      }
    });
    if (isRegister) {
      return {
        status: false,
        message: "đăng ký thất bại",
        data: null,
      };
    } else {
      authRepository.insertUser(dataModal);

      return {
        status: true,
        message: "đăng ký thành công",
        data: dataModal,
      };
    }
  }
}
export default AuthService;
