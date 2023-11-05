const productService = require("../services/ProductService");

class ProductController {
  async getAllProducts(req, res) {
    try {
      const model = {
        q: req.query.q,
        price_min: req.query.price_min,
        price_max: req.query.price_max,
        category: req.query.category,
        sort: req.query.sort,
        order: req.query.order,
      };
      console.log(model.price_min, model.price_max);
      const response = await productService.getProducts(model);
      if (response) res.status(200).json(response);
    } catch (error) {
      res.status(500).send("Product not found");
    }
  }
  async getProductById(req, res) {
    const model = {
      id: req.params.id,
    };
    try {
      const product = await productService.getProductById(model);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).send(error);
    }
  }
  createProduct(req, res) {
    try {
      const model = {
        product: req.body,
      };
      const response = productService.createProduct(model);
      res.status(200).json(response);
    } catch (error) {
      if (error == "Product not found") {
        res.status(404).send(error);
      }
      res.status(500).send(error);
    }
  }
  updateProduct(req, res) {
    try {
      const model = {
        id: req.params.id,
        updateProduct: { ...req.body, id: req.params.id },
      };
      const response = productService.updateProduct(model);
      res.status(200).json(response);
    } catch (error) {
      res.status(404).send(error);
    }
  }
  deleteProduct(req, res) {
    try {
      const model = {
        id: req.params.id,
      };
      const response = productService.deleteProduct(model);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).send("Product not found");
    }
  }
  getProductByCondition() {}
}
module.exports = new ProductController();
