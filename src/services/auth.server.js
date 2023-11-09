import { AuthencationException } from "../expeiptions/expeiption.js";
import { MSG_COMMON, MSG_VALIDATION } from "../messages/message.js";
import authRepository from "../repositories/auth.repository.js";
const userLogin = (data) => {
  try {
    const data = authRepository.getData();

    // Kiểm tra không có

    throw new AuthencationException(
      MSG_COMMON.MSG_ERROR.UnauthorizedException,
      401,
      MSG_VALIDATION
    );
  } catch (error) {
    throw error;
  }
  // Xử lý lấy dữ liệu từ repo
};

const registerUser = async (data) => {
  try {
    return await authRepository.insertUser(data);
  } catch (error) {}
};

const getUser = async () => {
  try {
    console.log(111222);
    return await authRepository.getAllUsers();
  } catch (error) {}
};
export default {
  registerUser,
  getUser,
};
