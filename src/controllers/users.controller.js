import UsersService from "../../service/users.service.js";
import User from "../models/user.model.js";
import uploadToCloudinary from "../utils/cloudinary.js";
import { filterData, seachByName } from "../utils/method.js";
const usersService = new UsersService();
class UsersController {
  // ================= get users =====================
  async getUsers(req, res) {
    try {
      const listUsers = await usersService.getUsers();
      res.status(200).json(listUsers);
    } catch (err) {
      throw err;
    }
  }
  // ================= get users by id ================
  async getUsersById(req, res) {
    try {
      const user = await usersService.getUsersById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      throw err;
    }
  }
  // ================== add user ==================
  async insertUser(req, res) {
    try {
      const response = await usersService.insertUsers(req.body);
      res.status(200).send(response.message);
    } catch (err) {
      throw err;
    }
  }
  // ===============search users===================
  async seachByNameUser(req, res) {
    try {
      const response = await seachByName(User, req.params.name);
      res.status(200).send(response);
    } catch (err) {
      throw err;
    }
  }

  // ===============delete user======================
  async deleteUser(req, res) {
    try {
      const response = await usersService.deleteUsersById(req.params.id);
      res.status(200).send(response);
    } catch (err) {
      throw err;
    }
  }
  // ==============update ảnh user========================
  async updateImageUser(req, res) {
    const result = await uploadToCloudinary(req.file);
    const image = result.url;
    const dataModal = { ...req.body, avatar: image };
    const response = usersService.updateUsers(req.params.id, dataModal);
    res.json(response);
  }
  // ==============update ảnh user========================
  async updateUser(req, res) {
     const dataModal = { ...req.body};
    const response = usersService.updateUsers(req.params.id, dataModal);
    res.json(response);
  }
}
export default UsersController;
