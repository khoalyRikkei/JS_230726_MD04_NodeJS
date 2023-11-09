import UsersService from "../../service/users.service.js";
import { filterData, seachByName } from "../utils/method.js";
const usersService = new UsersService();
class UsersController {
  async getUsers(req, res) {
    try {
      const listUsers = await usersService.getUsersService();
      res.status(200).send(listUsers);
    } catch (err) {
      throw err;
    }
  }
 async getUsersById(req, res) {
  try{
    const user = await usersService.getUsersByIdService(req.params.id);
    res.status(200).send(user);
  }catch (err) {
    throw err
  }
    
  }
  addUser(req, res) {
    const response = usersService.insertUsersService(req.body);
    res.send(response.message);
  }
  updateUser(req, res) {
    const response = usersService.updateUsersService(req.params.id, req.body);
    res.send(`${response}`);
  }
  seachByNameUser(req, res) {
    const response = seachByName("src/models/users.json", req.params.name);
    res.send(response);
  }
  deleteUser(req, res) {
    const response = usersService.deleteUsersByIdService(req.params.id);
    res.send(response);
  }
}
export default UsersController;
