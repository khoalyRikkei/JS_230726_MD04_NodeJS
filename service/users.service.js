import UsersRepository from "../repositories/users.repository.js";

const usersRepository = new UsersRepository();

class UsersService {
  // get all users
 async getUsersService() {
    const response=await usersRepository.getUsersRepository();
    return response
  }
  // get user buy id
 async getUsersByIdService(id) {
   
      const getAllUsers = await usersRepository.getUsersRepository();
      const user = getAllUsers.find((item) => item.id == id);
      return user;
  }
// insert user
  insertUsersService(dataModal) {
    // const getAllUsers = usersRepository.getUsersRepository();
    // const user = getAllUsers.find((item) => item.email == dataModal.email);
    
    // if (user) {
    //   return {
    //     status: false,
    //     message: "tài khoản đã tồn tại",
    //     data: null,
    //   };
    // } else {
    //   usersRepository.insertUsersRepository(dataModal);
    //   return {
    //     status: true,
    //     message: "thêm thành công",
    //     data: dataModal,
    //   };
    // }
  
    const response= usersRepository.insertUsersRepository(dataModal)
    return  response
  }
  
 async updateUsersService(id,dataModal){
    return await usersRepository.updateUsersRepository(id,dataModal);
    
  }
 async deleteUsersByIdService(id) {
    return await usersRepository.deleteUsersByIdRepository(id);
  }
}
export default UsersService;
