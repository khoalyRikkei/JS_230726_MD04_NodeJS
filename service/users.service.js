import UsersRepository from "../repositories/users.repository.js";
import uploadToCloudinary from "../src/utils/cloudinary.js";

const usersRepository = new UsersRepository();

class UsersService {
  // get all users
  async getUsers() {
    const response = await usersRepository.getUsers();
    return response;
  }
  // get user buy id
  async getUsersById(id) {
    const getAllUsers = await usersRepository.getUsers();
    const user = getAllUsers.find((item) => item.id == id);
    return user;
  }
  // insert user
  insertUsers(dataModal) {
   
    const response = usersRepository.insertUsers(dataModal);
    return response;
  }

  async updateUsers(id, dataModal) {
    const response = await usersRepository.updateUsers(id, dataModal);
    return response;
  }
  async deleteUsersById(id) {
    return await usersRepository.deleteUsersById(id);
  }
}
export default UsersService;
