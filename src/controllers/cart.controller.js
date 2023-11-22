const cartService = require("../services/cart.service");

class cartController {
  async getAllCart(req, res) {
    try {
      const response = await cartService.getAllCart();
      if (response.length === 0) {
        return res.status(200).json({ message: "No items in the cart." });
      }
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
  async createCart(req, res) {
    try {
      const { id } = req.user;
      const data = {
        ...req.body,
        userId: id,
      };
      console.log(data);
      const response = await cartService.createCart(data);
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
  async getCartByUser(req, res) {
    try {
      const { id } = req.user;
      const response = await cartService.getCartByUser({ id });
      if (response.length === 0) {
        return res.status(200).json({ message: "No items in the cart." });
      }
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
  async deleteCart(req, res) {
    try {
      const { id } = req.params;
      const response = await cartService.deleteCart(id);
      console.log(response);
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
}

module.exports = new cartController();
