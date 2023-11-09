import express from "express";
import AuthController from "../controller/auth.controller.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";
const authRouter = express.Router();
const authController = new AuthController()



  // API Login
  authRouter.post("/login", authController.login);

  // API Register
  authRouter.post("/register", authController.register);

  // API Logout
  authRouter.get("/logout", authController.logout);


  authRouter.get("/secure-data", authenticateToken, (req, res) => {
    // Đoạn mã xử lý khi token hợp lệ
    // Ví dụ: trả về dữ liệu bảo mật
  });

export default authRouter;