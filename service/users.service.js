import UsersRepository from "../repositories/users.repository.js";

const usersRepository = new UsersRepository();

class UsersService {
  
 async getUsersService() {
    const response=await usersRepository.getUsersRepository();
    return response
  }
 async getUsersByIdService(id) {
   
      const getAllUsers = await usersRepository.getUsersRepository();
      const user = getAllUsers.find((item) => item.id == id);
      return user;
  
    
  }
  insertUsersService(dataModal) {
    const getAllUsers = usersRepository.getUsersRepository();
    const user = getAllUsers.find((item) => item.email == dataModal.email);
    
    if (user) {
      return {
        status: false,
        message: "tài khoản đã tồn tại",
        data: null,
      };
    } else {
      usersRepository.insertUsersRepository(dataModal);
      return {
        status: true,
        message: "thêm thành công",
        data: dataModal,
      };
    }
  }
  updateUsersService(id,dataModal){
    return usersRepository.updateUsersRepository(id,dataModal);
    
  }
  deleteUsersByIdService(id) {
    return usersRepository.deleteUsersByIdRepository(id);
  }
}
export default UsersService;
