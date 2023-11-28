import Cart from "../src/models/carts.model.js";
import {
  deleteItemById,
  getAllItems,
  updateItem,
} from "../src/utils/db.util.js";

class CartsReponsitory {
  async getCartByUser(user_id) {
    return await Cart.findAll({ where: { user_id: user_id } });
  }
  // delete a product
  async deleteCartByUser(id) {
    const response = await deleteItemById(Cart, id);
    return response;
  }
  //
  async updateCartByUser(id, data) {
    const response = await updateItem(Cart, id, data);
    return response;
  }
}
export default CartsReponsitory;
