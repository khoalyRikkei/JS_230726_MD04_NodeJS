import express, { query } from "express";
import fs from "fs";
import UserController from "../controller/users.controller.js";
import { handleAvatarUpload } from "../middlewares/handleUpload.js";

const userRouter = express.Router();
const userController = new UserController()
// API Users
userRouter.get("/", userController.getDataUser); 

userRouter.get("/:id", userController.getUserById);

userRouter.patch("/:id", userController.editUserChangeStatus);

userRouter.patch("/:id/avatar", handleAvatarUpload,userController.changeAvatar)

export default userRouter;
