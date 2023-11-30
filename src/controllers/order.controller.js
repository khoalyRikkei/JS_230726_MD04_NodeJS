const orderService = require("../services/order.service");

class OrderController {
  async getAllOrder(req, res, next) {
    try {
      const model = {
        limit: Number(req.query.limit),
        page: Number(req.query.page) || 1,
        sort: req.query.sort,
        order: req.query.order,
        status: req.query.status,
        user_id: req.query.user_id,
      };

      const orders = await orderService.getAllOrders(model);
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
  async getOrderByUserID(req, res, next) {}
  async createOrder(req, res, next) {
    try {
      const model = {
        user_id: req.user.id,
        shipping_address: {
          full_name: req.body.full_name,
          address: req.body.address,
          phone: req.body.phone,
          province: req.body.province,
          city: req.body.city,
        },
      };

      const newOrder = await orderService.createOrder(model);
      res.status(200).send(newOrder);
    } catch (error) {
      next(error);
    }
  }
  updateOrder() {}
}

module.exports = new OrderController();
