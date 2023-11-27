const orderRepository = require("../repositories/order.repository");
const moment = require("moment");
const { BadRequestException } = require("../expeiptions");
class OrderService {
  async getAllOrders(model) {
    try {
      const queryOptions = {
        limit: model.limit || 6,
        offset: (model.page - 1) * (model.limit || 6),
        order: [],
        where: {},
      };
      // Thiết lập sắp xếp
      if (model.sort) {
        queryOptions.order.push([model.sort, "ASC"]);
      }

      if (model.sort && model.order) {
        queryOptions.order.push([model.sort, model.order.toUpperCase()]);
      }
      console.log("condition2 ", queryOptions);
      if (model.status) {
        queryOptions.where.status = model.status;
      }
      if (model.user_id) {
        queryOptions.where.user_id = model.user_id;
      }

      let orders;
      if (
        model.page !== 1 ||
        model.limit !== 6 ||
        Object.values(queryOptions.where).length > 0 ||
        queryOptions.order.length > 0
      ) {
        orders = await orderRepository.getAllOrdersByCondition(queryOptions);
      }

      orders = await orderRepository.getAllOrders();
      return orders;
    } catch (error) {
      throw error;
    }
  }

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
        const productDetail = await orderRepository.getProductByFK(detail.product_id); // Lấy thông tin sản phẩm
        if (productDetail) {
          // Trừ số lượng đã bán từ số lượng tồn kho của sản phẩm
          const updatedStock = productDetail.quantity_stock - detail.quantity;
          console.log("update stock ", updatedStock);
          // Cập nhật lại số lượng tồn kho mới vào database
          await orderRepository.updateProductStock(detail.product_id, updatedStock);
        }
      }

      const createOrder = await orderRepository.insertOrders(orders);
      return createOrder;
    } catch (error) {
      throw error;
    }
  }
  updateOrder(model) {}
}
module.exports = new OrderService();
