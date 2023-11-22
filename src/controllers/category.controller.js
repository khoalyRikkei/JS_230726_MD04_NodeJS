const categoryService = require("../services/category.service");

class categoryController {
  async createCategory(req, res) {
    console.log(req.body);
    try {
      const response = await categoryService.createCategory(req.body);
      return res.status(200).json(response);
    } catch (error) {
      // return internal ServerError(res)
    }
  }
  async getAllCategory(req, res) {
    try {
      const response = await categoryService.getAllCategory();
      return res.status(200).json(response);
    } catch (error) {
      // return internal ServerError(res)
    }
  }
  async getOneCategory(req, res) {
    try {
      const { id } = req.params;
      const response = await categoryService.getOneCategory({ id });
      return res.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "Category not found",
        });
      }
      return { error: "error" };
    }
  }
  async updateCategory(req, res) {
    try {
      const { id } = req.params;
      const response = await categoryService.updateCategory(id, req.body);
      return res.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "Category not found",
        });
      }
      return { error: "error" };
    }
  }
  async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      const response = await categoryService.deleteCategory({ id });
      return res.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "Category not found",
        });
      }
      return { error: "error" };
    }
  }
}

module.exports = new categoryController();
