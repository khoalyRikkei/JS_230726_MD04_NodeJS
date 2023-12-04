import CartsService from "../../service/carts.service.js";
const cartService = new CartsService();
class CartsController {
  // ================== create cart user ========================
  async createCart(req, res) {
    try {
      const response = await cartService.createCart(req.body);
      res.status(200).json({ mesage: "thêm sản phẩm vào cart thành công" });
      
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  }
  // ================== get cart by user ======================
  async getCartByUser(req, res) {
    try {
      const response = await cartService.getCartByUser(req.params.id);
      res.status(200).json(response);
    } catch (error) {
      throw error;
    }
  }
  // =================== delete cart =============================
  async deleteCartById(req, res) {
    try {
      const response = await cartService.deleteCartById(req.params.id);
      res.status(200).json(response);
    } catch (err) {
      throw err;
    }
  }
  // =================== update cart ========================
  async updateCartByUser(req, res) {
    const data = { ...req.body };
    try {
      const response = await cartService.updateCartByUser(req.params.id, data);
      res.status(200).json(response);
    } catch (err) {
      throw err;
    }
  }
}
export default CartsController;
