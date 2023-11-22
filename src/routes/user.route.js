const userController = require("../controllers/user.controller");

const express = require("express");
userController;
const userRouter = express.Router();

userRouter.get("/", usersController.getData);

userRouter.get("/", (req, res) => {
  res.send("lấy data user thành công");

  //

  //
});
userRouter.get("/:id", (req, res) => {
  res.send("lấy data user thành công");
});
userRouter.post("/", (req, res) => {
  res.send("lấy data user thành công");
});

export default userRouter;
