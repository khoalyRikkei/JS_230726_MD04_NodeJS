import express from "express";
import AuthController from "../controllers/auth.controller.js";
const authRouter = express.Router();
const authController = new AuthController();
// đăng nhập
authRouter.post("/login", authController.login);
// đăng xuất
authRouter.post("/logout", authController.loguot);
// đăng ký
authRouter.post("/register", authController.register);

export default authRouter;
