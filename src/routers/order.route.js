const orderController = require("../controllers/order.controller");
const express = require("express");
const checkAuthentication = require("../middlewares/verifyToken");
const orderRouter = express.Router();

orderRouter.get("/", checkAuthentication, orderController.getAllOrder);
orderRouter.post("/", checkAuthentication, orderController.createOrder);

module.exports = orderRouter;
