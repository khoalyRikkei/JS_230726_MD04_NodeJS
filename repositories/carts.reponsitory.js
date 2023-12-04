import Cart from "../src/models/carts.model.js";
import Product from "../src/models/product.model.js";
import { deleteItemById, updateItem } from "../src/utils/db.util.js";

class CartsReponsitory {
  // ============== get cart by user =======================
  async getCartByUser(userId) {
    try {
      const userCart = await Cart.findAll({
        where: {
          user_id: userId,
        },
        include: [
          {
            model: Product,
            attributes: ["product_name", "product_price", "product_img"],
          },
        ],
        attributes: ["id", "user_id", "product_id", "quantity", "size"],
      });
      return userCart;
    } catch (error) {
      console.error("Error fetching user cart:", error);
      throw error;
    }
  }
  // =======================delete a product =========================
  async deleteCartById(id) {
    const response = await deleteItemById(Cart, id);
    return response;
  }
  // ======================= update product =========================
  async updateCartByUser(id, data) {
    const response = await updateItem(Cart, id, data);
    return response;
  }
}
export default CartsReponsitory;
