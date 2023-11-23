const productController = require("../controllers/product.controller");

const express = require("express");
const productsRouter = express.Router();

// lấy danh sách sản phẩm
productsRouter.get("/", productController.getProducts);

// lấy thông tin sản phẩm dựa trên ID
productsRouter.get("/:id", productController.getProductById);

// tạo sản phẩm mới
productsRouter.post("/", productController.createProduct);

// xoá sản phẩm
// productsRouter.delete("/:id", productController.deleteProduct);

module.exports = productsRouter;
