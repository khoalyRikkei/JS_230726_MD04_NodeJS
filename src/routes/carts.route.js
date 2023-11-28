import express from "express";
import CartsController from "../controllers/carts.controller.js";

const cartsRouter = express.Router();
const cartsController = new CartsController();
cartsRouter.post("/", cartsController.createCart);
// lấy cart của user
cartsRouter.get("/:id/cart", cartsController.getCartByUser);
// xóa sản phẩm trong cart
cartsRouter.delete("/:id", cartsController.deleteCartByUser);
// thay đổi số lượng sản phẩm trong cart
cartsRouter.patch("/:id", cartsController.updateCartByUser);
export default cartsRouter;
