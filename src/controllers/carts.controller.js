import CartItem from "../models/cartItem.model.js";
import Cart from "../models/carts.model.js";
import Product from "../models/product.model.js";

class CartsController {
  async createCart(req, res) {
    try {
      const { user_id, product_id, quantity, size } = req.body;

      // Kiểm tra xem giỏ hàng của người dùng đã được tạo chưa
      let cartUser = await Cart.findOne({ where: { user_id } });
      if (!cartUser) {
        // tạo carst cho user
        let carts = await Cart.create({ user_id, total: 0 });
        // lấy thông tin product
        let productCart = await Product.findOne({ where: { id: product_id } });

        // tạo cartItem
        await CartItem.create({
          cart_id: carts.id,
          product_id,
          quantity,
          size,
        });
       
      } else {
       
        // tìm product trong cartitem
        let productCartItem = await CartItem.findOne({
          where: { product_id: product_id, cart_id: cartUser.id },
        });

        // nếu cartitem chưa có product
        if (!productCartItem) {
          //  tạo mới cartitem theo cart_id
          await CartItem.create({
            cart_id: cartUser.id,
            product_id,
            quantity,
            size,
          });
        } else {
          // có product trong cartitem thì thay đổi số lượng sp đó
          await CartItem.update(
            {
              quantity: productCartItem.quantity + parseInt(quantity, 0),
            },
            { where: { cart_id: cartUser.id, product_id: product_id } }
          );
          
        }
      }
      res.status(200).json({ mesage: "thêm sản phẩm thành công" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  }
}
export default CartsController;
