const Favorite = require("../entities/favorites.entity");
const Role = require("../entities/roles.entity");
const User = require("../entities/users.entity");
const bcrypt = require("bcryptjs");

class userRepository {
  async getAllUser() {
    try {
      const response = await User.findAll({
        include: [
          {
            model: Role,
            as: "Role",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt", "password", "roleId"],
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async getOneUser({ id }) {
    try {
      const response = await User.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: Favorite,
            as: "favorite",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async updateUser(id, body) {
    console.log(body);
    try {
      let newUpdate = { ...body };
      if (body.password) {
        const hashPassword = bcrypt.hashSync(body.password, 10);
        newUpdate = {
          ...newUpdate,
          password: hashPassword,
        };
      }
      const response = await User.update(newUpdate, {
        where: { id },
      });
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async deleteUser({ id }) {
    try {
      if (!id) {
        throw new Error("Bad request");
      }

      // Lấy thông tin user hiện tại
      const user = await User.findOne({ where: { id } });

      if (!user) {
        return { success: false, message: "User not found" };
      }

      // Chuyển đổi giá trị của trường "status"
      const newStatus = user.status === 1 ? 0 : 1;

      // Cập nhật giá trị mới cho trường "status"
      const change = await db.User.update(
        { status: newStatus },
        { where: { id } }
      );

      return {
        success: true,
        message: "User status updated successfully",
        data: user,
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = new userRepository();
