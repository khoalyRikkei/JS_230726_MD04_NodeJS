const { ServerException } = require("../expeiptions");
const categoryService = require("../services/category.service");
class CategoryController {
  async getAllCategory(req, res, next) {
    try {
      const categories = await categoryService.getAllCategor();
      res.status(200).json(categories);
    } catch (error) {
      const err = new ServerException("ServerException", 500, error.message);
      next(err);
    }
  }
  async createCategory(req, res, next) {
    try {
      const model = {
        newCategory: {
          category_name: req.body.category_name,
          description: req.body.description,
          status: 1,
          deleteAt: null,
        },
      };
      const createCategory = await categoryService.createCategory(model);
      res.status(200).json(createCategory);
    } catch (error) {
      const err = new ServerException("ServerException", 500, error.message);
      next(err);
    }
  }
  async updateCategory(req, res, next) {
    try {
      const model = {
        id: req.params.id,
        updateCategory: {
          category_name: req.body.category_name,
          description: req.body.description,
          status: req.body.status,
          deletedAt: null,
        },
      };

      const updateCategory = await categoryService.updateCategory(model);

      res.status(200).json(updateCategory);
    } catch (error) {
      const err = new ServerException("ServerException", 500, error.message);
      next(err);
    }
  }
  async deleteCategory(req, res, next) {
    try {
      const model = {
        id: req.params.id,
      };
      const deleteCategory = await categoryService.deleteCategory(model);
      res.status(200).json(deleteCategory);
    } catch (error) {
      const err = new ServerException("ServerException", 500, error.message);
      next(err);
    }
  }
}
module.exports = new CategoryController();
