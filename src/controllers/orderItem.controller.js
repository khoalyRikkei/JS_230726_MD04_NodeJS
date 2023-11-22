const orderItemService = require("../services/orderItem.service");

class orderItemController {
  async createOrderItem(req, res) {
    console.log(req.user);
    try {
      const { id } = req.user;
      const response = await orderItemService.createOrderItem({ id });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
  async getOrderItemByUser(req, res) {
    try {
      const { id } = req.user;
      const response = await orderItemService.getOrderItemByUser(id);
      if (response.length === 0) {
        return res.status(200).json({ message: "no order item found" });
      }
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
  async getAllOrderItem(req, res) {
    try {
      const response = await orderItemService.getAllOrderItem();
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
}

module.exports = new orderItemController();
