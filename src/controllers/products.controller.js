import ProductsService from "../../service/products.service.js";
import { filterData, seachByNameProduct } from "../utils/method.js";
import Product from "../models/product.model.js";
import uploadToCloudinary from "../utils/cloudinary.js";
const productsService = new ProductsService();
class ProductController {
  // get all products
  async getProducts(req, res) {
    try {
      const listProducts = await productsService.getProducts();
      res.status(200).json(listProducts);
    } catch (err) {
      throw err;
    }
  }
  // get product by id
  async getProductById(req, res) {
    try {
      const response = await productsService.getProductsById(req.params.id);
      res.status(200).json(response.data);
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
        product_price: Number(req.body.product_price),
        quantity: Number(req.body.quantity),
        product_img: image,
      };

      const response = await productsService.insertProduct(dataModal);
      res.status(200).send(response);
    } catch (err) {
      throw err;
    }
  }
  // update product

  async updateProduct(req, res) {
    try {
      const result = await uploadToCloudinary(req.file);
      const image = result.url;

      const dataModal = { ...req.body, product_img: image };
      const response = await productsService.updateProduct(
        req.params.id,
        dataModal
      );
      res.status(200).send(response);
    } catch (err) {
      throw err;
    }
  }
  // delete product
  async deleteProduct(req, res) {
    try {
      const response = await productsService.deleteProduct(req.params.id);
      res.status(200).send(response);
    } catch (err) {
      throw err;
    }
  }
  // tìm sản phẩm theo tên
  async seachByNameProduct(req, res) {
    try {
      const response = await seachByNameProduct(Product, req.params.name);
      res.status(200).json(response);
    } catch (err) {
      throw err;
    }
  }
  // sắp xếp sản phấm giá từ thấp đến cao
  async sortedProductByPrice(req, res) {
    try {
      const sortedProducts = await Product.findAll({
        order: [["product_price", "ASC"]], // Sắp xếp theo giá tăng dần
      });

      res.json(sortedProducts);
    } catch (error) {
      console.error("Error fetching sorted products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  // sắp xếp từ cap đến thấp
  async sortedProductByPriceReduce(req, res) {
    try {
      const sortedProducts = await Product.findAll({
        order: [["product_price", "DESC"]], // Sắp xếp theo giá giảm dần
      });

      res.json(sortedProducts);
    } catch (error) {
      console.error("Error fetching sorted products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  // lọc theo danh mục
  async fillterCategory(req, res) {
    try {
      const dataProducts = await Product.findAll({
        where: { category_name: req.params.category },
      });

      res.json(dataProducts);
    } catch (error) {
      console.error("Error fetching sorted products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default ProductController;
