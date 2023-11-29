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
        const insertProductCart = await cartRepository.createCart(model);
        return insertProductCart;
      } else {
        const newQuantity = model.quantity + result.quantity;
        const productCartUpdate = await cartRepository.cartProductUpdate(result.id, newQuantity);
        return productCartUpdate;
      }
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
