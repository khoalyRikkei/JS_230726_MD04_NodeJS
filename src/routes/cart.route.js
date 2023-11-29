const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");
const { authenticateToken } = require("../middlewares/authMiddleware");

router.get("/", authenticateToken, cartController.getCart);
router.post("/create/", authenticateToken, cartController.createCart);
router.put("/update/:id", authenticateToken, cartController.updateCart);
router.delete("/delete-item/:id", authenticateToken, cartController.deleteCartItem);
router.get("/delete-all", authenticateToken, cartController.deleteAllCart);

module.exports = router;
