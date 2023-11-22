import User from "../src/models/user.model.js";
import {
  deleteItemById,
  getAllItems,
  insertItem,
  updateItem,
} from "../src/utils/db.util.js";

class UsersRepository {
  // get all users
  async getUsersRepository() {
    const response = await getAllItems(User);
      return response;
  }
  // insert user
  async insertUsersRepository(dataModal) {
    const response = await insertItem(User, dataModal);
    return response.id;
  }
  // delete user
 async deleteUsersByIdRepository(id) {
    return await deleteItemById(User, id);
  }
  // update user
 async updateUsersRepository(id, dataModal) {
    return await updateItem(User, id, dataModal);
  }
}
export default UsersRepository;
