import User from "../src/models/user.model.js";
import { getAllItems, insertItem } from "../src/utils/db.util.js";

class AuthRepository {
  async getUsers() {
    const response = await getAllItems(User);
 
    return response;
  }
 async insertUser(entity) {
   const response=await insertItem(User, entity);
   return response
  }
}
export default AuthRepository;
