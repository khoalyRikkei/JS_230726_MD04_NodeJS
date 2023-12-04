import OrderService from "../../service/orders.service.js";
const orderService = new OrderService();
class OrderController {
  // ================ get all orders ===================
  async getOrders(req, res) {
    const response = await orderService.getOrders();
    res.status(200).json(response);
  }
  // ================ create order =====================
  async createOrder(req, res) {
    const dataOder = { ...req.body, status: "pending" };

    try {
      const response = await orderService.createOrder(dataOder);
      res.status(200).json(response);
    } catch (err) {
      throw err;
    }
  }
  // ================= get order by user =================
  async getOrderByUser(req, res) {
    
    try {
      const response = await orderService.getOrderByUser(req.params.id);
      res.status(200).json(response);
    } catch (err) {
      throw err;
    }
  }
}
export default OrderController;
