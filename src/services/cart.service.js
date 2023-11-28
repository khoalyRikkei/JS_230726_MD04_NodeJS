const cartRepository = require("../repositories/cart.repository");

class CartService {
  getCart(model) {
    try {
      return cartRepository.getCart(model);
    } catch (error) {
      throw error;
    }
  }
  createCart(model) {
    try {
      return cartRepository.createCart(model);
    } catch (error) {
      throw error;
    }
  }
  updateCart(model) {
    try {
      return cartRepository.updateCart(model.cart_id, model.updateCart);
    } catch (error) {
      throw error;
    }
  }
  deleteCartItem(model) {
    try {
      return cartRepository.deleteCartItem(model.cart_id);
    } catch (error) {
      throw error;
    }
  }
  deleteAllCart(model) {
    try {
      return cartRepository.deleteAllCart(model.user_id);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new CartService();
