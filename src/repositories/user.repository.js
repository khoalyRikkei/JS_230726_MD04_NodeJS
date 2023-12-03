const { insertData, getData, deleteData, updateData } = require("../utils/dbMethod");
const User = require("../models/user.model");
class UserRepository {
  async getAllUser() {
    try {
      const users = await getData(User);
      const totalUsers = await User.count();
      return {
        users,
        totalUsers,
      };
    } catch (error) {
      throw error;
    }
  }
  async getUserByCondition(queryOptions) {
    const { order, limit, offset, where } = queryOptions;
    try {
      const users = await User.findAll({
        where: where,
        order: order,
        limit: limit,
        offset: offset,
      });
      const totalUsers = await User.count({ where: where });

      return { totalUsers, users };
    } catch (error) {
      throw error;
    }
  }
  async getUserById(id) {
    const foundUser = await User.findOne({
      where: {
        id: id,
      },
      raw: true,
    });
    return foundUser;
  }
  async checkUserInDB(email) {
    const foundUser = await User.findOne({
      where: {
        email: email,
      },
      raw: true,
    });
    return foundUser;
  }
  insertUser(newUser) {
    return insertData(newUser, User);
  }
  async updateUser(id, userUpdate) {
    return await updateData(id, userUpdate, User);
  }
  async updateStatusUser(id, userUpdate) {
    try {
      const foundData = await User.findOne({
        where: {
          id: id,
          role: 0,
        },
      });

      if (foundData) {
        await foundData.update(userUpdate);
        return foundData;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  // deleteUser(id) {
  //   return deleteData(id, User);
  // }
}
module.exports = new UserRepository();
