const orderRepository = require("../repositories/order.repository");
const moment = require("moment");
const { BadRequestException } = require("../expeiptions");
const cartRepository = require("../repositories/cart.repository");
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
      // Lấy thông tin giỏ hàng của userId
      const cart = await cartRepository.getCartArr(model.user_id);
      const orders = [];

      for (const item of cart) {
        // Kiểm tra số lượng tồn kho của sản phẩm
        const product = await orderRepository.getProductByFK(item.product_id);

        if (product && product.quantity_stock >= item.quantity) {
          // Tạo đơn hàng và thêm vào mảng orders
          const order = {
            user_id: model.user_id,
            status: 0,
            created_at: moment(new Date()).format("YYYY-MM-DD"),
          };
          orders.push(order);

          //update lại quantity_stock của product
          const updatedStock = product.quantity_stock - item.quantity;

          await orderRepository.updateProductStock(item.product_id, updatedStock);
        } else {
          throw new BadRequestException(
            `The product with ID ${item.product_id} does not have sufficient quantity for ordering.`
          );
        }
      }
      // thêm dữ liệu vào bảng orders
      const createdOrders = await Promise.all(
        orders.map((order) => orderRepository.insertOrders(order))
      );

      const orderDetails = [];

      for (let i = 0; i < cart.length; i++) {
        const cartItem = cart[i];
        const order = createdOrders[i];

        const orderDetail = {
          name: cartItem.product_name,
          product_id: cartItem.product_id,
          quantity: cartItem.quantity,
          image: cartItem.image_url,
          total_price: cartItem.price * cartItem.quantity,
          order_id: order.id,
        };
        orderDetails.push(orderDetail);
      }

      //thêm dữ liệu vào bảng orderDetail
      await orderRepository.insertOrderDetail(orderDetails);
      // thêm dữ liệu vào bảng shippingaddress
      const insertShippingAddress = await orderRepository.insertShippingAddress(
        model.shipping_address
      );
      const shippingAddressId = insertShippingAddress.id;

      // Cập nhật ID của địa chỉ giao hàng vào các đơn hàng đã tạo
      await Promise.all(
        createdOrders.map((order) => {
          orderRepository.updateShippingAddress(order.id, shippingAddressId);
        })
      );

      //xóa tất cả cart của user_id đó
      await cartRepository.deleteAllCart(model.user_id);

      return "Order created successfully";
    } catch (error) {
      throw error;
    }
  }
  updateOrder(model) {}
}
module.exports = new OrderService();
