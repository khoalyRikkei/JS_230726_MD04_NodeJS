import Order from "../src/models/order.model.js";
import { getAllItems, insertItem } from "../src/utils/db.util.js";

class OrderRepository {
  // ============== get all orders =================
  async getOrders() {
    const response = await getAllItems(Order);
    return response;
  }
  // ================ create new order =================
  async createOrder(dataOder) {
    const response = await insertItem(Order, dataOder);
    return response;
  }
  // ================= get order by user =================
  async getOrderByUser(user_id) {
    const response = await Order.findAll({ where: { user_id: user_id } });
    return response;
  }
}
export default OrderRepository;
