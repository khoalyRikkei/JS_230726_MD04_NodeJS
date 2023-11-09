import {
  deleteItemById,
  getAllItems,
  insertItem,
  updateItem,
} from "../src/utils/db.util.js";

class UsersRepository {
 async getUsersRepository() {
    const response=await getAllItems("users");
    return response
  }
  insertUsersRepository(dataModal) {
    return insertItem("src/models/users.json", dataModal);
  }
  deleteUsersByIdRepository(id) {
    return deleteItemById("src/models/users.json", id);
  }
  updateUsersRepository(id, dataModal) {
    return updateItem("src/models/users.json", id, dataModal);
  }
}
export default UsersRepository;
