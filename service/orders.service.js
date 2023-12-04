import { where } from "sequelize";
import CartsReponsitory from "../repositories/carts.reponsitory.js";
import OrderRepository from "../repositories/orders.repository.js";
import ProductsRepository from "../repositories/products.repository.js";
import Cart from "../src/models/carts.model.js";
import Order_detail from "../src/models/order_detail.model.js";
import Product from "../src/models/product.model.js";
import { getItemById, updateItem } from "../src/utils/db.util.js";

const orderRepository = new OrderRepository();
const cartRepository = new CartsReponsitory();
const productRepository = new ProductsRepository();
class OrderService {
  // =============== get all orders ================
  async getOrders() {
    const response = await orderRepository.getOrders();
    return response;
  }
  // ================ create order ================
  async createOrder(dataOder) {
    try {
      if (dataOder.cartUser.length == 0) {
        return {
          status: false,
          message: "giỏ hàng bạn trống! ",
        };
      }
      for (const cart of dataOder.cartUser) {
        const product = await getItemById(Product, cart.product_id);
        if (product.quantity < cart.quantity) {
          return {
            status: false,
            message:
              product.product_name + "Số lượng vượt quá " + product.quantity,
          };
        }
      }

      const totalPrice = dataOder.cartUser.reduce(
        (sum, item) => sum + item.product.product_price * item.quantity,
        0
      );

      const orderUser = await orderRepository.createOrder({
        user_id: dataOder.user_id,
        user_name: dataOder.user_name,
        phone: dataOder.phone,
        total: totalPrice,
        status: dataOder.status,
        note: dataOder.note,
        delivery_address: dataOder.delivery_address,
      });
      for (const cart of dataOder.cartUser) {
        const orderDetail = {
          product_id: cart.product_id,
          quantity: cart.quantity,
          size: cart.size,
          order_id: orderUser.id,
        };
        await Order_detail.create(orderDetail);
        const product = await getItemById(Product, cart.product_id);
        await updateItem(Product, cart.product_id, {
          quantity: product.quantity - cart.quantity,
        });
        await Cart.destroy({ where: { user_id: dataOder.user_id } });
      }
      return { message: "Order thành công!", status: true };
    } catch (error) {
      throw error;
    }
  }
  // ================ get order by user =================
  async getOrderByUser(user_id) {
    const response = await orderRepository.getOrderByUser(user_id);
    return response;
  }
}
export default OrderService;
