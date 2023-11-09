import { getData, insertData, deleteData, editData } from "../../utils/data.util.js";
import { Category } from "../models/category.model.js";

export default class CategoryRepository {
  async getCategory() {
    try {
      const categoryData = await getData(Category);
      return categoryData;
    } catch (error) {
      throw error;
    }
  }
  async createCategory(data) {
    try {
      const newCategory = await insertData(Category, data);
      return newCategory;
    } catch (error) {
      throw error;
    }
  }

  async deleteCategory(id) {
    try {
      const deleteCategory = await deleteData(Category, id);
      return deleteCategory;
    } catch (error) {
      throw error;
    }
  }
  editCategory(id, item) {
   try {
    const editCategory = editData(Category, id, item);
    return editCategory;
   } catch (error) {
    throw error;
   }
  }
}
