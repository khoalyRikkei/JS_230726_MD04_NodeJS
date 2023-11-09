import express, { query } from "express";
import fs from "fs";
import UserController from "../controller/users.controller.js";
const userRouter = express.Router();
const userController = new UserController()
// API Users
userRouter.get("/", userController.getDataUser); 

userRouter.put("/:id", userController.editDataUser);

userRouter.patch("/:id", userController.editPasswordUser);

export default userRouter;
