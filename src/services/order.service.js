const orderItemRepository = require("../repositories/orderItem.repository");
const orderRepository = require("../repositories/order.repository");

class orderService {
  async createOrder(data) {
    try {
      const orderItem = await orderItemRepository.getAllOrderItem();
      const codeOrder = [
        ...new Set(orderItem.map((item) => item.codeOrderItem)),
      ];
      for (const item of codeOrder) {
        const createOrder = {
          userId: data.userId,
          addressId: +data.addressId,
          paymentId: +data.paymentId,
          status: data.status,
          codeOrder: item,
          totalAmount: data.totalAmount,
          shippingFee: data.shippingFee,
          orderDate: data.orderDate,
        };
        const response = await orderRepository.createOrder(createOrder);
        return {
          success: response > 0 ? true : false,
          message:
            response > 0 ? "Create order successfully" : "Create order failed",
        };
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async getAllOrder() {
    try {
      const response = await orderRepository.getAllOrder();
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      console.log(error);
    }
    return error;
  }
}

module.exports = new orderService();
