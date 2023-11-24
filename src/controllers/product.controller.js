const { ServerException, BadRequestException } = require("../expeiptions");
const productService = require("../services/product.sevice");
const moment = require("moment");
class ProductController {
  async getAllProduct(req, res, next) {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit, 10) : null;
      const name = req.query.name;
      const price = req.query.price;
      const category = req.query.category;
      const orderByName = req.query.orderByName;
      const orderByPrice = req.query.orderByPrice;
      const currentPage = req.query.currentPage || 1;

      const filterConditions = {};
      const limitProduct = {
        limit: null,
        offset: null,
      };

      if (limit) {
        const offset = (currentPage - 1) * limit;
        limitProduct.limit = limit;
        limitProduct.offset = offset;
      }

      if (name) {
        filterConditions.product_name = name;
      }

      if (price) {
        filterConditions.price = price;
      }

      if (category) {
        filterConditions["$Category.category_name$"] = category;
      }

      const order = [];
      if (orderByName) {
        order.push(["product_name", orderByName.toUpperCase()]);
      }
      if (orderByPrice) {
        order.push(["price", orderByPrice.toUpperCase()]);
      }

      let products;

      if (Object.keys(filterConditions).length === 0) {
        products = await productService.getAllProduct(filterConditions, order, limitProduct);
      } else {
        products = await productService.getAllProduct();
      }

      res.status(200).json(products);
    } catch (error) {
      const err = new ServerException("ServerException", 500, error.message);
      next(err);
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
        throw new BadRequestException("Update product failed");
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
      if (!responseDeleteProduct) {
        throw new BadRequestException("Delete product failed");
      }

      res.status(200).json(responseDeleteProduct);
    } catch (error) {
      const err = new ServerException("ServerException", 500, error.message);
      next(err);
    }
  }
}

module.exports = new ProductController();
