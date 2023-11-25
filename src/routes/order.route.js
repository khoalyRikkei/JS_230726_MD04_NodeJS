const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");
const { authenticateToken } = require("../middlewares/authMiddleware");

router.get("/", orderController.getAllOrder);
router.get("/:id", orderController.getOrderByUserID);
router.post("/", authenticateToken, orderController.createOrder);
router.put("/:id", orderController.updateOrder);

module.exports = router;
