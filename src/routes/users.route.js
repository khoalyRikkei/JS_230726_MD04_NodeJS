import express from "express";
import UsersController from "../controllers/users.controller.js";

const usersRouter = express.Router();
const usersController = new UsersController();
// lấy list users
usersRouter.get("/", usersController.getUsers);
// lấy user theo id
usersRouter.get("/:id", usersController.getUsersById);
// thêm user
usersRouter.post("/", usersController.insertUser);
// edit user
usersRouter.put("/:id",usersController.updateUser)
// xóa user
usersRouter.delete("/:id", usersController.deleteUser);
// seach by name
usersRouter.get("/search/:name", usersController.seachByNameUser)
 

export default usersRouter;
