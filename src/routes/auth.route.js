import express from "express";
import authController from "../controllers/auth.controller.js";
import { validationFormRegister } from "../middlewares/handleValidation.js";

const authRouter = express.Router();

authRouter.post("/login", authController.login);
authRouter.post("/register", validationFormRegister, authController.register);
authRouter.get("/user", authController.getUser);
export default authRouter;
