import express from "express";
import AuthController from "../controller/auth.controller.js";
const authRouter = express.Router();
const authController = new AuthController();

// API Login
authRouter.post("/login", authController.login);

// API Register
authRouter.post("/register", authController.register);

// API Logout
authRouter.get("/logout", authController.logout);

//API Change Password
authRouter.post("/:id/change-password", authController.changePassword);

// API Request Password Reset
authRouter.post("/request-password-reset", authController.requestPasswordReset);

// API Reset Password
authRouter.post("/reset-password", authController.resetPassword);

export default authRouter;
