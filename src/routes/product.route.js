const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const { validateFormProduct } = require("../middlewares/handleValidation");

router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);
router.post("/", validateFormProduct, productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
