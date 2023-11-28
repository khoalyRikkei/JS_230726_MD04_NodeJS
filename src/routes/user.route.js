const express = require("express");
const userController = require("../controllers/user.controller");
const { checkAdmin } = require("../middlewares/is-Admin");

const userRouter = express.Router();

userRouter.post("/", userController.createUser);

userRouter.get("/", checkAdmin, userController.getAllUsers);
userRouter.get("/search/:name", userController.getUserByName);
userRouter.patch("/:id/edit", userController.editUser);
userRouter.put("/:id/editRole", userController.editUserRole);
userRouter.get("/:id", userController.getUserById);

module.exports = userRouter;
