import { deleteCloudinary } from "../configs/cloudinary.config.js";
import UserRepository from "../repository/user.repository.js";

const userRepository = new UserRepository();
export default class UserService {
  async getUser() {
    try {
      const data = await userRepository.getUsers();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const userById = await userRepository.getUserById(id);
      return userById;
    } catch (error) {
      throw error;
    }
  }

  async editUserChangeStatus(id, item) {
    try {
      const data = await userRepository.editUser(id, item);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async editUserChangeAvatar(id, cloudinaryResult) {
    try {
      const user = await userRepository.getUserById(id);
      if (!user) {
        throw new Error("User not found.");
      }
      if (user.avatarPublicId) {
        // Nếu có, xóa avatar cũ trên Cloudinary
        await deleteCloudinary(user.avatarPublicId);
      }
      // Tạo đối tượng item với thông tin avatar mới
      const item = {
        avatar: cloudinaryResult.url,
        avatarPublicId: cloudinaryResult.public_id,
        // Các thuộc tính khác của user nếu cần
      };
      const data = await userRepository.editUser(id, item);
      if (!data) {
        throw new Error("Failed to edit user.");
      }
      return item;
    } catch (error) {
      throw error;
    }
  }
}
