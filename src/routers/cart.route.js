const cartController = require("../controllers/cart.controller");
const express = require("express");
const cartRouter = express.Router();
const checkAuthentication = require("../middlewares/verifyToken");

cartRouter.get("/", cartController.getAllCart);
cartRouter.post("/", checkAuthentication, cartController.createCart);
cartRouter.post(
  "/cart-by-user",
  checkAuthentication,
  cartController.getCartByUser
);
cartRouter.delete("/:id", checkAuthentication, cartController.deleteCart);

module.exports = cartRouter;
