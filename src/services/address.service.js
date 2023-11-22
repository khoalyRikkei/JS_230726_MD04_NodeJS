const addressRepository = require("../repositories/address.repository");

class addressService {
  async createAddress(data, id) {
    try {
      const response = await addressRepository.createAddress(data, id);
      return {
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Address created successfully"
            : "Address is available",
      };
    } catch (error) {
      return error;
    }
  }
  async getAllAddress() {
    try {
      const address = await addressRepository.getAllAddress();
      return { success: true, data: address };
    } catch (error) {
      return error;
    }
  }
  async getAllAddressByUser({ id }) {
    try {
      const response = await addressRepository.getAllAddressByUser(id);
      return { success: true, data: response };
    } catch (error) {
      return error;
    }
  }
  async getOneAddress({ id }) {
    try {
      const response = await addressRepository.getOneAddress(id);
      if (response?.dataValues !== undefined) {
        return response.dataValues;
      } else {
        return {
          success: false,
          message: "Address not found",
        };
      }
    } catch (error) {
      return error;
    }
  }
  async updateAddress(id, body) {
    try {
      const res = await addressRepository.updateAddress(id, body);
      if (res[0] === 0) {
        return { success: false, message: "address not found" };
      } else {
        return { success: true, message: "address updated successfully" };
      }
    } catch (error) {
      return error;
    }
  }
  async deleteAddress({ id }) {
    try {
      const response = await addressRepository.deleteAddress(id);
      if (response === 0) {
        return {
          success: false,
          message: "address not found",
        };
      }
      return { success: true, message: "Delete Address successfully" };
    } catch (error) {
      return error;
    }
  }
}

module.exports = new addressService();
