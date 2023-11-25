const orderRepository = require("../repositories/order.repository");
const moment = require("moment");
const { BadRequestException } = require("../expeiptions");
class OrderService {
  getAllOrder() {}
  getOrderByUserId(model) {
    try {
      return orderRepository.getOrderById(model.id);
    } catch (error) {
      throw error;
    }
  }
  async createOrder(model) {
    try {
      const orderDetails = [];
      for (const item of model.cart) {
        const product = await orderRepository.getProductByFK(item.product_id); // Tìm sản phẩm trong database
        if (product && product.quantity_stock >= item.quantity) {
          // Kiểm tra số lượng sản phẩm có đủ để đặt hàng không
          orderDetails.push({
            name: item.product_name,
            product_id: item.product_id,
            quantity: item.quantity,
            image: item.image_url,
            total_price: item.price * item.quantity,
          });
        } else {
          throw new BadRequestException(
            `The product with ID ${item.product_id} does not have sufficient quantity for ordering.`
          );
        }
      }

      const createdOrderDetails = await orderRepository.insertOrderDetail(orderDetails);

      const orders = [];

      for (const detail of createdOrderDetails) {
        orders.push({
          user_id: model.user_id,
          status: 0,
          created_at: moment(new Date()).format("YYYY-MM-DD"),
          order_detail_id: detail.id,
        });
      }
      console.log(orders);

      const createOrder = await orderRepository.insertOrders(orders);
      return createOrder;
    } catch (error) {
      throw error;
    }
  }
  updateOrder(model) {}
}
module.exports = new OrderService();
