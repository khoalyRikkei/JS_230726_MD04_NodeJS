const orderItemRepository = require("../repositories/orderItem.repository");

class orderItemService {
  async createOrderItem(id) {
    try {
      const response = await orderItemRepository.createOrderItem(id);
      return {
        data: response,
        message: response.message,
      };
    } catch (error) {
      throw error;
    }
  }
  async getOrderItemByUser(id) {
    try {
      if (!id) {
        throw new Error("Bad request");
      }
      const response = await orderItemRepository.getOrderItemByUser(id);
      if (response !== null) {
        return {
          success: true,
          data: response,
        };
      } else {
        return { success: false, message: "Not found" };
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async getAllOrderItem() {
    try {
      const response = await orderItemRepository.getAllOrderItem();
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

module.exports = new orderItemService();
