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
      const cartData = req.body;
      const model = {
        user_id: req.user.id,
      };

      model.cart = cartData.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        product_name: item.product.product_name,
        product_id: item.product.id,
        price: item.product.price,
        image_url:
          item.product.imageProducts.length > 0
            ? item.product.imageProducts[0].image_url
            : "No image available",
      }));

      const newOrder = await orderService.createOrder(model);
      res.status(200).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
  updateOrder() {}
}

module.exports = new OrderController();
