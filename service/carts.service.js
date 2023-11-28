import CartsReponsitory from "../repositories/carts.reponsitory.js";
import Cart from "../src/models/carts.model.js";
import Product from "../src/models/product.model.js";
const cartsRepository = new CartsReponsitory();
class CartsService {
  async createCart(dataCart) {
    // Kiểm tra xem giỏ hàng của người dùng đã được tạo chưa
    const cartUser = await Cart.findOne({
      where: { user_id: dataCart.user_id },
    });

    if (!cartUser) {
      const productCart = await Product.findOne({
        where: { id: dataCart.product_id },
        raw: true,
      });

      // tạo carst cho user
      const carts = await Cart.create({
        user_id: dataCart.user_id,
        product_id: dataCart.product_id,
        product_name: productCart.product_name,
        product_price: productCart.product_price,
        product_img: productCart.product_img,
        quantity: dataCart.quantity,
        size: dataCart.size,
      });
      return carts;
    }

    const productCart = await Cart.findOne({
      where: { product_id: dataCart.product_id },
      raw: true,
    });

    if (!productCart) {
      const newProductCart = await Product.findOne({
        where: { id: dataCart.product_id },
        raw: true,
      });
      const carts = await Cart.create({
        user_id: dataCart.user_id,
        product_id: dataCart.product_id,
        product_name: newProductCart.product_name,
        product_price: newProductCart.product_price,
        product_img: newProductCart.product_img,
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
  async getCartByUser(user_id) {
    const response = await cartsRepository.getCartByUser(user_id);
    return response;
  }
  async deleteCartByUser(id) {
    const response = await cartsRepository.deleteCartByUser(id);
    return response;
  }
  async updateCartByUser(id, data) {
    const response = await cartsRepository.updateCartByUser(id, data);
    return response;
  }
}
export default CartsService;
