const orderService = require("../services/order.service");

class OrderController {
  getAllOrder() {}
  async getOrderByUserID(req, res, next) {
    try {
      const model = {
        id: req.params.id,
      };
      const orders = await orderService.getOrderByUserId(model);
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
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
