import User from "../src/models/user.model.js";
import {
  deleteItemById,
  getAllItems,
  insertItem,
  updateItem,
} from "../src/utils/db.util.js";

class UsersRepository {
  //=================== get all users==================
  async getUsers() {
    const response = await getAllItems(User);
    return response;
  }
  // ======================insert user=================
  async insertUsers(entity) {
    const response = await insertItem(User, entity);
    return response.id;
  }
  // ===================delete user======================
  async deleteUsersById(id) {
    return await deleteItemById(User, id);
  }
  // ================update user==========================
  async updateUsers(id, entity) {
    const response = await updateItem(User, id, entity);
    return response;
  }
}
export default UsersRepository;
