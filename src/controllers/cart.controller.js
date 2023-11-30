const { ServerException, BadRequestException } = require("../expeiptions");
const moment = require("moment");
const cartService = require("../services/cart.service");
class CartController {
  async getCart(req, res, next) {
    try {
      const model = {
        user_id: req.user.id,
      };
      const cart = await cartService.getCart(model);
      res.status(200).json(cart);
    } catch (error) {
      next(error);
    }
  }
  async createCart(req, res, next) {
    try {
      const model = {
        user_id: req.user.id,
        product_id: Number(req.body.product_id),
        quantity: Number(req.body.quantity),
        created_at: moment(new Date()).format("YYYY-MM-DD"),
      };
      const createCart = await cartService.createCart(model);
      res.status(200).json(createCart);
    } catch (error) {
      next(error);
    }
  }
  async updateCart(req, res, next) {
    try {
      const model = {
        cart_id: req.params.id,
        user_id: req.user.id,
        updateCart: {
          quantity: req.body.quantity,
        },
      };
      const updateCart = await cartService.updateCart(model);
      res.status(200).json(updateCart);
    } catch (error) {
      next(error);
    }
  }
  async deleteCartItem(req, res, next) {
    try {
      const model = {
        cart_id: req.params.id,
      };
      const deleteCartItem = await cartService.deleteCartItem(model);

      res.status(200).json(deleteCartItem);
    } catch (error) {
      next(error);
    }
  }
  async deleteAllCart(req, res, next) {
    try {
      const model = {
        user_id: req.user.id,
      };
      const deleteAllCartItems = await cartService.deleteAllCart(model);
      res.status(200).json(deleteAllCartItems);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new CartController();
