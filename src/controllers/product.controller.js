const { ServerException, BadRequestException } = require("../expeiptions");
const productService = require("../services/product.sevice");
const moment = require("moment");
class ProductController {
  async getAllProduct(req, res, next) {
    try {
      const model = {
        limit: parseInt(req.query.limit),
        name: req.query.name,
        category: req.query.category,
        sort: req.query.sort,
        order: req.query.order,
        page: parseInt(req.query.page) || 1,
      };
      const results = await productService.getAllProduct(model);
      res.setHeader("X-Total-Products", `${results.totalProduct}`);

      res.status(200).json(results.products);
    } catch (error) {
      next(error);
    }
  }
  async getProductById(req, res, next) {
    try {
      const model = {
        id: req.params.id,
      };
      const product = await productService.getProductById(model.id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
  async createProduct(req, res, next) {
    try {
      const model = {
        newProduct: {
          sku: req.body.sku,
          product_name: req.body.product_name,
          price: req.body.price,
          quantity_stock: req.body.quantity_stock,
          description: req.body.description,
          category_id: req.body.category_id,
          created_at: moment(new Date()).format("YYYY-MM-DD"),
        },
        images: req.images,
      };

      const insertProduct = await productService.createProduct(model);
      res.status(200).json(insertProduct);
    } catch (error) {
      next(error);
    }
  }
  async updateProduct(req, res, next) {
    try {
      const model = {
        id: req.params.id,
        updateProduct: {
          ...req.body,
        },
        images: req.images,
      };

      const updateProduct = await productService.updateProduct(model);
      res.status(200).json(updateProduct);
    } catch (error) {
      next(error);
    }
  }
  async deleteProduct(req, res, next) {
    try {
      const model = {
        id: req.params.id,
      };
      const responseDeleteProduct = await productService.deleteProduct(model);

      res.status(200).json(responseDeleteProduct);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
