import express, { query } from "express";
import fs from "fs";
import PaymentController from "../controller/payment.controller.js";
const paymentController = new PaymentController()
const paymentRouter = express.Router();
paymentRouter.get("/", paymentController.getPaymentData);

paymentRouter.post("/", paymentController.createPaymentData);

export default paymentRouter;
