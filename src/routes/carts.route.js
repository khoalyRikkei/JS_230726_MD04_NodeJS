import express from "express";
import CartsController from "../controllers/carts.controller.js";

const cartsRouter = express.Router();
const cartsController = new CartsController();
cartsRouter.post("/", cartsController.createCart);
export default cartsRouter;
