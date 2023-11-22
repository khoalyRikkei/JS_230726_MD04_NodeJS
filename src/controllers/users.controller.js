import UsersService from "../../service/users.service.js";
import User from "../models/user.model.js";
import { filterData, seachByName } from "../utils/method.js";
const usersService = new UsersService();
class UsersController {
  // get users
  async getUsers(req, res) {
    try {
      const listUsers = await usersService.getUsersService();
      res.status(200).send(listUsers);
    } catch (err) {
      throw err;
    }
  }
  // get users by id
  async getUsersById(req, res) {
    try {
      const user = await usersService.getUsersByIdService(req.params.id);
      res.status(200).send(user);
    } catch (err) {
      throw err;
    }
  }
  // add user
 async insertUser(req, res) {
    try {
      const response =await usersService.insertUsersService(req.body);
      res.status(200).send(response.message);
    } catch (err) {
      throw err;
    }
  }
  // search users
  async seachByNameUser(req, res) {
    try {
      const response = await seachByName(User, req.params.name);
      res.status(200).send(response);
    } catch (err) {
      throw err;
    }
  }

  // delete user
  async deleteUser(req, res) {
    try {
      const response = await usersService.deleteUsersByIdService(req.params.id);
      res.status(200).send(response);
    } catch (err) {
      throw err;
    }
  }
  // update user
  updateUser(req, res) {
    const response = usersService.updateUsersService(req.params.id, req.body);
    res.send(response);
  }
}
export default UsersController;
