import User from "../src/models/user.model.js";
import { getAllItems, insertItem } from "../src/utils/db.util.js";

class AuthRepository {
  // ============== get all users ====================
  async getUsers() {
    const response = await getAllItems(User);
    return response;
  }
  // ================ insert user ====================
 async insertUser(entity) {
   const response=await insertItem(User, entity);
   return response
  }
}
export default AuthRepository;
