import CartsService from "../../service/carts.service.js";
const cartService = new CartsService();
class CartsController {
  // thêm cart user
  async createCart(req, res) {
    try {
      const { user_id, product_id, quantity, size } = req.body;
      await cartService.createCart(req.body);

      res.status(200).json({ mesage: "thêm sản phẩm vào cart thành công" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  }
  // láy cart của user
  async getCartByUser(req, res) {
    try {
      const response = await cartService.getCartByUser(req.params.id);
      res.status(200).json(response);
    } catch (error) {
      throw error;
    }
  }
  async deleteCartByUser(req, res) {
    try {
      const response = await cartService.deleteCartByUser(req.params.id);
      res.status(200).json(response);
    } catch (err) {
      throw err;
    }
  }
  async updateCartByUser(req, res) {
    const data = { ...req.body };
    console.log(1111, data);
    console.log(2222, req.params.id);
    try {
      const response = await cartService.updateCartByUser(req.params.id, data);
      res.status(200).json(response);
    } catch (err) {
      throw err;
    }
  }
}
export default CartsController;
