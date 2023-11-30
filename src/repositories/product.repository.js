const Product = require("../models/product.model");
const Category = require("../models/category.model");
const ImageProduct = require("../models/imageProduct.model");
const { insertData, updateData, deleteData } = require("../utils/dbMethod");
const { ServerException } = require("../expeiptions");

class ProductRepository {
  async getAllProduct() {
    try {
      const products = await Product.findAll({
        include: [
          {
            model: Category,
            attributes: ["category_name"],
          },
          {
            model: ImageProduct,
            attributes: ["image_url"],
          },
        ],
        attributes: ["id", "product_name", "price", "sku", "quantity_stock", "description"],
      });

      const totalProducts = await Product.count();

      return { products, totalProducts };
    } catch (error) {
      throw new ServerException("ServerException", 500, error.message);
    }
  }
  async getAllProductByCondition(queryOptions) {
    try {
      const { order, limit, offset, where } = queryOptions;

      const products = await Product.findAll({
        include: [
          {
            model: Category,
            attributes: ["category_name"],
          },
          {
            model: ImageProduct,
            attributes: ["image_url"],
          },
        ],
        attributes: ["id", "product_name", "price", "sku", "quantity_stock", "description"],
        order: order,
        limit: limit,
        offset: offset,
        where: where,
      });

      const totalProducts = await Product.count({ where: where }); // Lấy tổng số lượng sản phẩm dựa trên điều kiện 'where'

      return { products, totalProducts };
    } catch (error) {
      throw new ServerException("ServerException", 500, error.message);
    }
  }

  async getProductById(id) {
    try {
      const result = await Product.findOne({
        where: { id },
        include: [
          {
            model: Category,
            attributes: ["category_name"],
          },
          {
            model: ImageProduct,
            attributes: ["image_url", "public_id"],
          },
        ],
        attributes: ["id", "product_name", "price", "sku", "quantity_stock", "description"],
      });

      if (!result) {
        return null;
      }

      return result;
    } catch (error) {
      throw new ServerException("ServerException", 500, error.message);
    }
  }
  async createProduct(newProduct) {
    return await insertData(newProduct, Product);
  }
  async insertImageProduct(images) {
    return await ImageProduct.bulkCreate(images);
  }

  async updateProduct(id, productUpdate) {
    return await updateData(id, productUpdate, Product);
  }

  async deleteImage(product_id) {
    try {
      const result = await ImageProduct.destroy({
        where: { product_id: product_id },
      });
      return result;
    } catch (error) {
      throw new ServerException("ServerException", 500, error.message);
    }
  }

  async deleteProduct(id) {
    return await deleteData(id, Product);
  }
}
module.exports = new ProductRepository();
