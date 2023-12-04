import express from "express";
import OrderController from "../controllers/order.controller.js";
const orderController = new OrderController();

const ordersRouter = express.Router();
// lấy list order
ordersRouter.get("/", orderController.getOrders);
// create order
ordersRouter.post("/", orderController.createOrder);
// get order by user
ordersRouter.get("/user/:id", orderController.getOrderByUser);

export default ordersRouter;
