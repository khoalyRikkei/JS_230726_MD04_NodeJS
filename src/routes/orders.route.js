import express from "express";
import OrderController from "../controllers/order.controller.js";
const orderController = new OrderController();


const ordersRouter = express.Router();
// lấy list order
ordersRouter.get("/", orderController.getOrder);

export default ordersRouter;
