const cartRepository = require("../repositories/cart.repository");

class CartService {
  getCart(model) {
    try {
      return cartRepository.getCart(model.user_id);
    } catch (error) {
      throw error;
    }
  }
  async createCart(model) {
    try {
      const result = await cartRepository.cartProductCheck(model.user_id, model.product_id);
      if (!result) {
        await cartRepository.createCart(model);
      } else {
        const newQuantity = model.quantity + result.quantity;
        await cartRepository.cartProductUpdate(result.id, newQuantity);
      }
      const cart = await cartRepository.getCart(model.user_id);
      return cart;
    } catch (error) {
      throw error;
    }
  }
  async updateCart(model) {
    try {
      const updateCart = await cartRepository.updateCart(model.cart_id, model.updateCart);
      return updateCart;
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
