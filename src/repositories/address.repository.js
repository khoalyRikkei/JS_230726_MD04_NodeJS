const Address = require("../entities/address.entity");

class addressRepository {
  async createAddress(data, id) {
    try {
      const userData = { ...data, userId: id };
      const response = await Address.findOrCreate({
        where: {
          address: data.address,
          phone: data.phone,
          userId: id,
        },
        defaults: { userData },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async getAllAddress() {
    try {
      const response = await Address.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async getAllAddressByUser(userId) {
    try {
      const response = await Address.findAll({
        where: { userId },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async getOneAddress(id) {
    try {
      const response = await Address.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async updateAddress(id, body) {
    try {
      const res = await Address.update(body, {
        where: { id },
      });
      return res;
    } catch (error) {
      return error;
    }
  }
  async deleteAddress(id) {
    try {
      const response = await Address.destroy({
        where: { id },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new addressRepository();
