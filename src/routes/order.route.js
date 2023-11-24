const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");

router.get("/", orderController.getAllOrder);
router.get("/", orderController.getOrderByUserID);
router.post("/", orderController.createOrder);
router.put("/:id", orderController.updateOrder);

module.exports = router;
