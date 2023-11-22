import { MSG_COMMON } from "../messages/index.js";
import AuthService from "../service/auth.service.js";

const authService = new AuthService();

class AuthController {
  async login(req, res, next) {
    const user = req.body;
    try {
      const ret = await authService.performLogin(user);
      const maxAgeInDays = 90;
      const maxAgeInMilliseconds = maxAgeInDays * 24 * 60 * 60 * 1000;
      res.cookie("refreshToken", ret.refreshToken, {
        maxAge: maxAgeInMilliseconds,
        httpOnly: true,
      });
      res.header("Authorization", "Bearer " + ret.assetToken);
      res.status(ret.statusCode).send(ret);
    } catch (error) {
      console.log(2222, error);
      next(error);
    }
  }

  async register(req, res, next) {
    try {
      const userData = req.body;
      const ret = await authService.performRegister(userData);
      res.status(ret.statusCode).json(ret.message);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res) {
    try {
      res.clearCookie("refreshToken");
      return res.status(200).json({ message: "Session deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async changePassword(req, res, next) {
    const userId = req.params.id;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    try {
      const ret = await authService.changePassword(
        userId,
        oldPassword,
        newPassword
      );
      res
        .status(200)
        .json({ message: MSG_COMMON.MSG_SUCCESS.update("Password"), ret });
    } catch (error) {
      console.log("AuthController", error);
      next(error);
    }
  }

  async requestPasswordReset(req, res, next) {
    const email = req.body.email;
    try {
      await authService.requestPasswordReset(email);
      res
        .status(200)
        .json({ message: "Password reset request sent successfully" });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async resetPassword(req, res, next) {
    const { email, codeResetPassword, newPassword, confirmPassword } = req.body;

    try {
      // Kiểm tra mật khẩu mới và nhập lại mật khẩu mới có khớp nhau không
      if (newPassword !== confirmPassword) {
        return res
          .status(400)
          .json({ message: "New password and confirm password do not match" });
      }
      const ret = await authService.resetPassword(email, codeResetPassword, newPassword);
      res.status(200).json(ret.message);
    } catch (error) {
      console.error("Error resetting password:", error);
      next(error);
    }
  }
}

export default AuthController;
