const Category = require("../entities/categories.entity");

class categoryRepository {
  async createCategory({ title }) {
    try {
      const response = await Category.findOrCreate({
        where: { title },
        defaults: { title },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async getAllCategory() {
    try {
      const response = await Category.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async getOneCategory({ id }) {
    try {
      const response = await Category.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async updateCategory(id, body) {
    try {
      const response = await Category.update(body, {
        where: { id },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async deleteCategory({ id }) {
    try {
      const response = await Category.destroy({
        where: { id },
      })
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new categoryRepository();
