const categoryRepository = require("../repositories/category.repository");

class categoryService {
  async createCategory({ title }) {
    try {
      const response = await categoryRepository.createCategory({ title });
      return {
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? " Create category successfully"
            : "Category is available",
      };
    } catch (error) {
      console.log(error);
      reject(error);
    }
  }
  async getAllCategory() {
    try {
      const response = await categoryRepository.getAllCategory();
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return error;
    }
  }
  async getOneCategory({ id }) {
    try {
      const response = await categoryRepository.getOneCategory({ id });
      if (response?.dataValues !== undefined) {
        return {
          success: true,
          data: response?.dataValues,
        };
      } else {
        return {
          success: false,
          message: "Category not found",
        };
      }
    } catch (error) {
      return error;
    }
  }
  async updateCategory(id, body) {
    try {
      const response = await categoryRepository.updateCategory(id, body);
      if (response[0] === 0) {
        return {
          success: false,
          message: "Category not found",
        };
      } else {
        return {
          success: true,
          message: "Category updated successfully",
        };
      }
    } catch (error) {
      return error;
    }
  }
  async deleteCategory({ id }) {
    try {
      const response = await categoryRepository.deleteCategory({ id });
      if (response === 0) {
        return {
          success: false,
          message: "Category not found",
        };
      }
      return {
        success: response > 0 ? true : false,
        message: "Category deleted",
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = new categoryService();
