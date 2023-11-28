import express from "express";
import ProductController from "../controllers/products.controller.js";
import upload from "../utils/multer.js";
import multer from "multer";
const uploadData = multer(); // để gửi dữ liệu từ form data
const productsRotuer = express.Router();
const productController = new ProductController();
// lấy listproduct
productsRotuer.get("/", productController.getProducts);
// lấy product theo id
productsRotuer.get("/:id", productController.getProductById);
// xóa product theo id
productsRotuer.delete("/:id", productController.deleteProduct);
// edit product
productsRotuer.put(
  "/:id",
  upload.single("product_img"),
  productController.updateProduct
);
// thêm product
productsRotuer.post(
  "/",
  upload.single("product_img"),
  productController.insertProduct
);
// seach byname product
productsRotuer.get("/seach/:name", productController.seachByNameProduct);
// sắp xếp sản phẩm theo giá
productsRotuer.get("/sorted/by-price", productController.sortedProductByPrice);
// sắp xếp sản phẩm theo giá
productsRotuer.get(
  "/sorted/by-price-reduce",
  productController.sortedProductByPriceReduce
);
// lọc theo category
productsRotuer.get("/category/:category", productController.fillterCategory);

export default productsRotuer;
