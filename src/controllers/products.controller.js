import fs from "fs";
import ProductsService from "../../service/products.service.js";
import { filterData, seachByNameProduct } from "../utils/method.js";
import Product from "../models/product.model.js";
import uploadToCloudinary from "../utils/cloudinary.js";
const productsService = new ProductsService();
class ProductController {
  // get all products
  async getProducts(req, res) {
    try {
      const listProducts = await productsService.getProductsService();
      res.status(200).send(listProducts);
    } catch (err) {
      throw err;
    }
  }
  // get product by id
  async getProductById(req, res) {
    try {
      const response = await productsService.getProductsByIdService(
        req.params.id
      );
      res.status(200).send(response.data);
    } catch (err) {
      throw err;
    }
  }
  // insert product
  async insertProduct(req, res) {
     try {
      const result = await uploadToCloudinary(req.file);
      const image = result.url;
      const dataModal = {
        ...req.body,
        price: Number(req.body.price),
        quantity: Number(req.body.quantity),
        product_img: image,
      };

      const response = await productsService.insertProductService(dataModal);
      res.status(200).send(response);
    } catch (err) {
      throw err;
    }
  }
  // update product

  updateProduct(req, res) {
    const response = productsService.updateProductService(
      req.params.id,
      req.body
    );
    res.send(response);
  }
  // delete product
  async deleteProduct(req, res) {
    try {
      const response = await productsService.deleteProductService(
        req.params.id
      );
      res.status(200).send(response);
    } catch (err) {
      throw err;
    }
  }
  async seachByNameProduct(req, res) {
    try {
      const response = await seachByNameProduct(Product, req.params.name);
      res.status(200).send(response);
    } catch (err) {
      throw err;
    }
  }
}

export default ProductController;
