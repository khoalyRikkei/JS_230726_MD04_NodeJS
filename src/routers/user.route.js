const userController = require("../controllers/user.controller");
const express = require("express");
const userRouter = express.Router();
const checkAuthentication = require("../middlewares/verifyToken");
const checkRoleUser = require("../middlewares/verifyRole");

userRouter.get(
  "/",
  checkAuthentication,
  checkRoleUser,
  userController.getAllUser
);
userRouter.post("/profile", checkAuthentication, userController.getOneUser);
userRouter.post("/forgotpassword");
userRouter.put("/updateUser", checkAuthentication, userController.updateUser);
userRouter.delete(
  "/:id",
  checkAuthentication,
  checkRoleUser,
  userController.deleteUser
);
module.exports = userRouter;
