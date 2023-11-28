const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");
const { authenticateToken } = require("../middlewares/authMiddleware");

router.get("/", authenticateToken, cartController.getCart);
router.post("/", authenticateToken, cartController.createCart);
router.put("/:id", authenticateToken, cartController.updateCart);
router.delete("/:id", authenticateToken, cartController.deleteCartItem);
router.delete("/user/:id", authenticateToken, cartController.deleteAllCart);

module.exports = router;
