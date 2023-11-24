const express = require("express");
const userController = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/", userController.createUser);

userRouter.get("/", userController.getAllUsers);
userRouter.get("/search/:name", userController.getUserByName);
userRouter.patch("/:id/edit", userController.editUser);
userRouter.put("/:id/editRole", userController.editUserRole);
userRouter.get("/:id", userController.getUserById);

module.exports = userRouter;
