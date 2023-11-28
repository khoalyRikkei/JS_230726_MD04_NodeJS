const express = require("express");
const paymentController = require("../controllers/payment.controller");

const payRouter = express.Router();

payRouter.get("/", paymentController.getAllPayments);
payRouter.get("/:id", paymentController.getPaymentById);
payRouter.post("/", paymentController.createPayment);
payRouter.delete("/:id", paymentController.deletePayment);
payRouter.put("/:id", paymentController.editPayment);

module.exports = payRouter;
