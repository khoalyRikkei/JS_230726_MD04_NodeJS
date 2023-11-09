import fs from "fs";
import ProductsService from "../../service/products.service.js";
import { filterData, seachByName } from "../utils/method.js";
import { connection } from "../utils/config.js";
const productsService = new ProductsService();
class ProductController {
  async getProducts(req, res) {
    try {
      const listProducts = await productsService.getProductsService();
      res.status(200).send(listProducts);
    } catch (err) {
      throw err;
    }
  }
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
  addProduct(req, res) {
    const data = [
      {
        ...req.body,
        id: Number(req.body.id),
        price: Number(req.body.price),
        quantity: Number(req.body.quantity),
        // created_at: new Date(),
        // update_at: new Date(),
      },
    ];
    const response = productsService.insertProductService(data);
    connection.query(`${response}`, (err, results, fields) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    });
    res.send(`${response}`);
  }
  updateProduct(req, res) {
    const response = productsService.updateProductService(
      req.params.id,
      req.body
    );
    res.send(`${response}`);
  }
  deleteProduct(req, res) {
    const response = productsService.deleteProductService(req.params.id);
    res.send(response);
  }
  seachByNameProduct(req, res) {
    const response = seachByName("src/models/products.json", req.params.name);
    res.send(response);
  }
}

export default ProductController;
