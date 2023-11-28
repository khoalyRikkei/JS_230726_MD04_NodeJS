const express = require("express");
const orderController = require("../controllers/order.controller");

const orderRouter = express.Router();

orderRouter.get("/", orderController.getAllOrders);
orderRouter.get("/:id", orderController.getOrderById);
orderRouter.post("/", orderController.createOrder);
orderRouter.delete("/:id", orderController.deleteOrder);
orderRouter.put("/:id", orderController.editOrder);

module.exports = orderRouter;
