const Product = require("../models/product.model");
const Category = require("../models/category.model");
const ImageProduct = require("../models/imageProduct.model");
const { insertData, updateData, deleteData } = require("../utils/dbMethod");

class ProductRepository {
  async getAllProduct() {
    try {
      const result = await Product.findAll({
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

      if (!result) {
        return null;
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
  async getAllProductByCondition(filterConditions, order = null, limit = null, offset = null) {
    const result = await Product.findAll({
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
      where: filterConditions,
      attributes: ["id", "product_name", "price", "sku", "quantity_stock", "description"],
      order: order, // Áp dụng sắp xếp theo yêu cầu
      limit: limit,
      offset: offset,
    });

    return result;
  }
  catch(error) {
    throw error;
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
        console.log("Không tìm thấy sản phẩm");
        return null;
      }

      return result;
    } catch (error) {
      console.error(error);
      throw error;
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
      throw error;
    }
  }

  async deleteProduct(id) {
    return await deleteData(id, Product);
  }
}
module.exports = new ProductRepository();
