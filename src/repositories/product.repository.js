const Category = require("../entities/categories.entity");
const Product = require("../entities/products.entity");

class productRepository {
  async getAllProduct() {
    try {
      const response = await Product.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt", "categoryId"],
        },
        include: [
          {
            model: Category,
            as: "category",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: Image,
            as: "image",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async createProduct(body) {
    try {
      const response = await Product.findOrCreate({
        where: {
          name: body.name,
          price: body.price,
          stock: body.stock,
          description: body.description,
          categoryId: body.categoryId,
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async getOneProduct({ id }) {
    try {
      const response = await Product.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: Category,
            as: "category",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: Image,
            as: "image",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async updateProduct(id, body) {
    try {
      const response = await Product.update(body, {
        where: { id },
      });
      console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  }
  async deleteProduct({ id }) {
    try {
      const response = await Product.destroy({
        where: { id },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new productRepository();
