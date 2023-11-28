const express = require("express");
const orderController = require("../controllers/order.controller");
const { checkAdmin } = require("../middlewares/is-Admin");
const { checkUser } = require("../middlewares/is-auth");

const orderRouter = express.Router();

orderRouter.get("/", checkAdmin, orderController.getAllOrders);
orderRouter.get("/:id", checkAdmin, orderController.getOrderById);
orderRouter.post("/", checkUser, orderController.createOrder);
orderRouter.delete("/:id", orderController.deleteOrder);
orderRouter.put("/:id", checkAdmin, orderController.editOrder);

module.exports = orderRouter;
