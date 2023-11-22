const cartRepository = require("../repositories/cart.repository");

class cartService {
  async getAllCart() {
    try {
      const response = await cartRepository.getAllCart();
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return error;
    }
  }
  async createCart(body) {
    try {
      const response = await cartRepository.createCart(body);
      return {
        message: response.message,
      };
    } catch (error) {
      return error;
    }
  }
  async getCartByUser(id) {
    try {
      const response = await cartRepository.getCartByUser(id);
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return error;
    }
  }
  async deleteCart(id) {
    console.log(id);
    try {
      const response = await cartRepository.deleteCart(id);
      return {
        message: "The cart was deleted",
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = new cartService();
