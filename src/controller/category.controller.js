// Trong file category.controller.js
import CategoryService from "../service/category.service.js";
import { MSG_COMMON } from "../messages/index.js";

const categoryService = new CategoryService();

class CategoryController {
  async getAllCategories(req, res, next) {
    try {
      const ret = await categoryService.getCategory();
      res.status(200).json(ret);
    } catch (error) {
      next(error);
    }
  }

  async getCategoryById(req, res, next) {
    try {
      const categoryId = req.params.id;
      const categoryData = await categoryService.getCategoryById(categoryId);
      if (categoryData) {
        res.status(200).json(categoryData);
      } else {
        res
          .status(404)
          .json({ message: MSG_COMMON.MSG_ERROR.NotFoundException });
      }
    } catch (error) {
      next(error);
    }
  }

  async createCategory(req, res, next) {
    const categoryData = req.body;
    try {
      const ret = await categoryService.createCategory(categoryData);
      res
        .status(201)
        .json({ message: MSG_COMMON.MSG_SUCCESS.create("Category") });
    } catch (error) {
      next(error);
    }
  }

  async deleteCategory(req, res, next) {
    try {
      const categoryId = req.params.id;
      const deletedCategory = await categoryService.deleteCategory(categoryId);
      if (deletedCategory) {
        res
          .status(200)
          .json({ message: MSG_COMMON.MSG_SUCCESS.delete("Category") });
      } else {
        res
          .status(404)
          .json({ message: MSG_COMMON.MSG_ERROR.NotFoundException });
      }
    } catch (error) {
      next(error);
    }
  }

  async editCategory(req, res, next) {
    const categoryId = req.params.id;
    const updatedData = req.body;
    try {
      const ret = await categoryService.editCategory(categoryId, updatedData);
      res
        .status(200)
        .json({ message: MSG_COMMON.MSG_SUCCESS.update("Category") });
    } catch (error) {
      next(error);
    }
  }
}

export default CategoryController;
