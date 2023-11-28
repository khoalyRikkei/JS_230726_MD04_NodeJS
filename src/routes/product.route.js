const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const { validateFormProduct } = require("../middlewares/handleValidation");
const { uploadArrayToCloudinaryAndReturnUrls } = require("../middlewares/uploadFileMiddleware");
const { authenticateToken, checkUserRole } = require("../middlewares/authMiddleware");

router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);
router.post(
  "/create",
  authenticateToken,
  checkUserRole(1),
  uploadArrayToCloudinaryAndReturnUrls,
  validateFormProduct,
  productController.createProduct
);
router.put(
  "/update/:id",
  authenticateToken,
  checkUserRole(1),
  uploadArrayToCloudinaryAndReturnUrls,
  productController.updateProduct
);
router.delete("/delete/:id", authenticateToken, checkUserRole(1), productController.deleteProduct);

module.exports = router;
