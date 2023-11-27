const express = require("express");
const cartController = require("../controllers/cart.controller");

const cartRouter = express.Router();

cartRouter.get("/", cartController.getAllCart);
cartRouter.get("/:id", cartController.getCartById);
cartRouter.post("/", cartController.createCart);
cartRouter.delete("/:id", cartController.deleteCart);
cartRouter.put("/edit/:id", cartController.editCart);

module.exports = cartRouter;
