import AuthRepository from "../repositories/auth.repository.js";
import bcrypt from "bcrypt";
const authRepository = new AuthRepository();

class AuthService {
  // ============== chek login =================
  async checkDataLogin(email, password) {
    const getAllUsers = await authRepository.getUsers();
    let isLogined = false;
    let userLogin;
    getAllUsers.forEach((user) => {
      if (user.email === email) {
        const isMatch = bcrypt.compareSync(password, user.password);
        if (isMatch) {
          isLogined = true;
          delete user.password;
          userLogin = { ...user };
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
  // ==================== check register  ===================
  async checkDataRegister(dataModal) {
    const getAllUsers = await authRepository.getUsers();

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
      const hashPassword = bcrypt.hashSync(dataModal.password, 12);
      await authRepository.insertUser({ ...dataModal, password: hashPassword });
      return {
        status: true,
        message: "đăng ký thành công",
        data: dataModal,
      };
    }
  }
}
export default AuthService;
