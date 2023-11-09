import { getData, insertData} from "../../utils/data.util.js";

export default class AuthRepository {
  getUsers() {
    const userData = getData("users");
    return userData;
  }
  createUser(user) {
    const newUser = insertData("users", user);
    return newUser;
  }
}
