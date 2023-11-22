import express from "express";
import ProductController from "../controllers/products.controller.js";
import upload from "../utils/multer.js";

const productsRotuer = express.Router();
const productController = new ProductController();
// lấy listproduct
productsRotuer.get("/", productController.getProducts);
// lấy product theo id
productsRotuer.get("/:id", productController.getProductById);
// xóa product theo id
productsRotuer.delete("/:id", productController.deleteProduct);
// edit product
productsRotuer.put("/:id", productController.updateProduct);
// thêm product
productsRotuer.post(
  "/",
  upload.single("file"),
  productController.insertProduct
);
// seach byname product
productsRotuer.get("/seach/:name", productController.seachByNameProduct);

export default productsRotuer;
