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
      const products = await productService.getAllProduct(model);
      res.status(200).json(products);
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
      const err = new ServerException("ServerException", 500, error.message);
      next(err);
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
        images: req.body.images,
      };
      const insertProduct = await productService.createProduct(model);
      res.status(200).json(insertProduct);
    } catch (error) {
      const err = new ServerException("ServerException", 500, error.message);
      next(err);
    }
  }
  async updateProduct(req, res, next) {
    try {
      const model = {
        id: req.params.id,
        updateProduct: {
          ...req.body,
        },
        images: req.body.images,
      };

      const updateProduct = await productService.updateProduct(model);
      if (!updateProduct) {
        const err = new BadRequestException("Update product failed");
        next(err);
      }
      res.status(200).json(updateProduct);
    } catch (error) {
      const err = new ServerException("ServerException", 500, error.message);
      next(err);
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
      const err = new ServerException("ServerException", 500, error.message);
      next(err);
    }
  }
}

module.exports = new ProductController();
