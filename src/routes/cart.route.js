const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");

router.get("/:id", cartController.getCart);
router.post("/", cartController.createCart);
router.put("/:id", cartController.updateCart);
router.delete("/:id", cartController.deleteCartItem);
router.delete("/user/:id", cartController.deleteAllCart);

module.exports = router;
