const productService = require("../services/product.service");

class productController {
  async getAllProduct(req, res) {
    try {
      const response = await productService.getAllProduct();
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }

  async createProduct(req, res) {
    try {
      const response = await productService.createProduct(req.body);
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
  async getOneProduct(req, res) {
    try {
      const { id } = req.params;
      const response = await productService.getOneProduct({ id });
      return res.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "Product not found",
        });
      }
      return { error: "error" };
    }
  }
  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const response = await productService.updateProduct(id, req.body);
      return res.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "Product not found",
        });
      }
      return { error: "error" };
    }
  }
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const response = await productService.deleteProduct({ id });
      return res.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "Product not found",
        });
      }
      return { error: "error" };
    }
  }
}

module.exports = new productController();
