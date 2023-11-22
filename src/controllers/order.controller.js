const orderService = require("../services/order.service");

class orderController {
  async createOrder(req, res) {
    try {
      const { id } = req.user;
      const data = {
        ...req.body,
        userId: id,
      };
      console.log("dscfcdsf", data);
      const response = await orderService.createOrder(data);
      console.log(response);
      return response.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
  async getAllOrder(req, res) {
    try {
      const response = await orderService.getAllOrder();
      return res.status(200).json(response);
    } catch (error) {
      // return internal ServerError(res)
    }
  }
}

module.exports = new orderController();
