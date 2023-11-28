import express from "express";
import AuthController from "../controllers/auth.controller.js";
import multer from "multer";
import upload from "../utils/multer.js";
const uploadData = multer(); // để gửi dữ liệu từ form data
const authRouter = express.Router();
const authController = new AuthController();

// đăng nhập
authRouter.post("/login", authController.login);
// đăng xuất
authRouter.post("/logout", authController.logout);
// đăng ký
authRouter.post("/register", uploadData.none(), authController.register);
// fetch user
authRouter.get("/fetch-user", authController.fetchUser);

export default authRouter;
