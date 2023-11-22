const productController = require("../controllers/product.controller");

const express = require("express");
const productsRouter = express.Router();

// lấy danh sách sản phẩm
productsRouter.get("/", productsController.getProducts);

// lấy thông tin sản phẩm dựa trên ID
productsRouter.get("/:id", productsController.getProductById);

// tạo sản phẩm mới
productsRouter.post("/", productsController.createProduct);

// xoá sản phẩm
productsRouter.delete("/", productsController.deleteProduct);

export default productsRouter;
