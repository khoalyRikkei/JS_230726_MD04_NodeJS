const productController = require("../controllers/product.controller");
const express = require("express");
const productRouter = express.Router();
const checkAuthentication = require("../middlewares/verifyToken");
const checkRoleUser = require("../middlewares/verifyRole");

productRouter.get("/", productController.getAllProduct);
productRouter.post(
  "/",
  checkAuthentication,
  checkRoleUser,
  productController.createProduct
);
productRouter.get("/:id", productController.getOneProduct);
productRouter.put(
  "/:id",
  checkAuthentication,
  checkRoleUser,
  productController.updateProduct
);
productRouter.delete(
  "/:id",
  checkAuthentication,
  checkRoleUser,
  productController.deleteProduct
);

module.exports = productRouter;
