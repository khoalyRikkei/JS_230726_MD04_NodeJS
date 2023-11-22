const userRepository = require("../repositories/user.repository");

class userService {
  async getAllUser() {
    try {
      const response = await userRepository.getAllUser();
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return error;
    }
  }
  async getOneUser({ id }) {
    try {
      const response = await userRepository.getOneUser({ id });
      if (response?.dataValues !== undefined) {
        return {
          success: true,
          data: response?.dataValues,
        };
      } else {
        return {
          success: false,
          message: "User not found",
        };
      }
    } catch (error) {
      return error;
    }
  }
  async updateUser(id, body) {
    try {
      const response = await userRepository.updateUser(id, body);
      if (response > 0) {
        return {
          success: true,
          message: "User updated successfully",
        };
      } else {
        return {
          success: false,
          message: "User update failed",
        };
      }
    } catch (error) {
      return error;
    }
  }
  async deleteUser({ id }) {
    try {
      const response = await userRepository.deleteUser({ id });
      if (response === 0) {
        return {
          success: false,
          message: "User not found",
        };
      }
      return {
        data: response,
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = new userService();
