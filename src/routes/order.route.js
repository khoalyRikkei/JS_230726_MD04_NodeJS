const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");
const { authenticateToken, checkUserRole } = require("../middlewares/authMiddleware");

router.get("/", authenticateToken, orderController.getAllOrder);
router.get("/:id", authenticateToken, orderController.getOrderByUserID);
router.post("/create", authenticateToken, orderController.createOrder);
router.put("/update/:id", authenticateToken, checkUserRole(1), orderController.updateOrder);

module.exports = router;
