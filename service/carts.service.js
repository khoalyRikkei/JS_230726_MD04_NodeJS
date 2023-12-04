import CartsReponsitory from "../repositories/carts.reponsitory.js";
import Cart from "../src/models/carts.model.js";
const cartsRepository = new CartsReponsitory();
class CartsService {
  // =================== create new Cart =================
  async createCart(dataCart) {
    const cartUser = await Cart.findOne({
      where: { user_id: dataCart.user_id, product_id: dataCart.product_id },
    });

    if (!cartUser) {
      const carts = await Cart.create({
        user_id: dataCart.user_id,
        product_id: dataCart.product_id,
        quantity: dataCart.quantity,
        size: dataCart.size,
      });
      return carts;
    }

    await Cart.update(
      {
        quantity:
          parseInt(cartUser.quantity, 0) + parseInt(dataCart.quantity, 0),
      },
      {
        where: {
          user_id: dataCart.user_id,
          product_id: dataCart.product_id,
        },
      }
    );
  }
  // ================= get cart by user =======================
  async getCartByUser(user_id) {
    const response = await cartsRepository.getCartByUser(user_id);
    return response;
  }
  // ================== delete cart =========================
  async deleteCartById(id) {
    const response = await cartsRepository.deleteCartById(id);
    return response;
  }
  // =================== update cart ========================
  async updateCartByUser(id, data) {
    const response = await cartsRepository.updateCartByUser(id, data);
    return response;
  }
}
export default CartsService;
