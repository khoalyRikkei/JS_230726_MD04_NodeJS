import { getAllItems, insertItem } from "../src/utils/db.util.js";

class AuthRepository {
  getUsers() {
    return getAllItems("src/models/users.json");
  }
  insertUser(entity) {
    return insertItem("src/models/users.json", entity);
  }
}
export default AuthRepository;
