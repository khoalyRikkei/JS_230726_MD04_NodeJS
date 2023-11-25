const { insertData, getData, updateData, deleteData } = require("../utils/dbMethod");
const Category = require("../models/category.model");

class CategoryRepository {
  getAllCategory() {
    try {
      return getData(Category);
    } catch (error) {
      throw error;
    }
  }
  createCategory(newCategory) {
    try {
      return insertData(newCategory, Category);
    } catch (error) {
      throw error;
    }
  }
  updateCategory(id, newCategory) {
    try {
      return updateData(id, newCategory, Category);
    } catch (error) {
      throw new ServerException("ServerException", 500, error.message);
    }
  }
  deleteCategory(id) {
    try {
      return deleteData(id, Category);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new CategoryRepository();
