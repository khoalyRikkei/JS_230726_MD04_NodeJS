import { generateRandomToken, sendResetEmail } from "../../utils/auth.util.js";
import { createAssetToken, createRefreshToken } from "../../utils/jwt.util.js";
import AuthRepository from "../repository/auth.repository.js";
import { validateUserData } from "../validations/user-register-validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authRepository = new AuthRepository();

export default class AuthService {
  async performLogin(user) {
    try {
      const getAllUser = await authRepository.getUsers();
      const checkLoginUser = getAllUser.find(
        (userDB) => userDB.email === user.email
      );

      if (checkLoginUser) {
        // Kiểm tra mật khẩu bằng bcrypt
        const isPasswordMatch = await bcrypt.compare(
          user.password,
          checkLoginUser.password
        );
        if (isPasswordMatch) {
          const assetToken = createAssetToken({
            id: checkLoginUser.id,
            role: checkLoginUser.role,
          });
          const refreshToken = createRefreshToken({
            id: checkLoginUser.id,
            role: checkLoginUser.role,
          });
          delete checkLoginUser.password;
          const successLogin = {
            statusCode: 200,
            success: true,
            message: "Đăng nhập thành công",
            assetToken: assetToken,
            refreshToken: refreshToken
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
      } else {
        const errorLogin = {
          statusCode: 401,
          success: false,
          message: "Người dùng không tồn tại",
        };
        return errorLogin;
      }
    } catch (error) {
      throw error;
    }
  }

  async performRegister(userData) {
    try {
      const validationError = validateUserData(userData);

      if (validationError) {
        return validationError;
      }
      const getAllUser = await authRepository.getUsers();
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

      // Log mật khẩu nguyên văn
      console.log("Original Password:", userData.password);

      // Băm mật khẩu trước khi lưu vào cơ sở dữ liệu
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      userData.password = hashedPassword;

      // Log mật khẩu đã được băm
      console.log("Hashed Password:", hashedPassword);

      const newUser = await authRepository.createUser(userData);
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
    } catch (error) {
      throw error;
    }
  }

  async changePassword(userId, oldPassword, newPassword) {
    try {
      const userById = await authRepository.getUserById(userId);

      if (!userById) {
        return { statusCode: 404, message: "User not found" };
      }

      // Kiểm tra mật khẩu cũ
      const isPasswordValid = await bcrypt.compare(
        oldPassword,
        userById.password
      );

      if (!isPasswordValid) {
        return { statusCode: 400, message: "Invalid old password" };
      }

      // Hash mật khẩu mới
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);

      // Cập nhật mật khẩu mới
      userById.password = hashedNewPassword;
      await userById.save();

      return { statusCode: 200, message: "Password changed successfully" };
    } catch (error) {
      console.error("AuthService", error);
      throw error;
    }
  }

  async requestPasswordReset(email) {
    // Tạo và lưu resetToken vào bảng Users
    const user = await authRepository.getUserByEmail(email);
    if (user) {
      // Nếu đã có resetPassword, xóa nó
      if (user.resetPassword && user.resetPasswordExpiry)  {
        user.resetPassword = null;
        user.resetPasswordExpiry = null;
      }

      const resetPasswordExpiryInMinutes = 1; // 10 phút
      const resetPasswordExpiry = new Date();
      resetPasswordExpiry.setMinutes(resetPasswordExpiry.getMinutes() + resetPasswordExpiryInMinutes);
  
      const resetPassword = generateRandomToken(6);
      user.resetPassword = resetPassword;
      user.resetPasswordExpiry = resetPasswordExpiry;
      await user.save();
      // Gửi email xác nhận hoặc link đặt lại mật khẩu
      sendResetEmail(user.email, resetPassword, resetPasswordExpiryInMinutes);
    }
  }

  async resetPassword(email, codeResetPassword, newPassword) {
    try {
      // Lấy thông tin người dùng theo email
      const user = await authRepository.getUserByEmail(email);
  
      // Kiểm tra xem người dùng có tồn tại không
      if (!user) {
        return { message: "Người dùng không tồn tại." };
      }
      // Kiểm tra xem token có hết hạn không
      if (user.resetPasswordExpiry && new Date() > user.resetPasswordExpiry) {
        return { message: "Yêu cầu đặt lại mật khẩu đã hết hạn. Vui lòng gửi lại yêu cầu mới." };
      }
  
      // Kiểm tra tính hợp lệ của token
      if (user.resetPassword !== codeResetPassword) {
        return { message: "Mã xác nhận không hợp lệ." };
      }
  
      // Hash mật khẩu mới và cập nhật thông tin người dùng
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      user.resetPassword = null; // Hủy bỏ token sau khi đã sử dụng
      user.resetPasswordExpiry = null; // Hủy bỏ thời hạn token sau khi đã sử dụng
      await user.save();
  
      // Trả về kết quả thành công
      return { message: "Đặt lại mật khẩu thành công." };
    } catch (error) {
      console.error("Error resetting password:", error);
      throw error;
    }
  }
  
  }

