import { getData, insertData, deleteData, editData } from "../../utils/util.js";

export default class CategoryRepository {
  async getCategory() {
    try {
      const categoryData = await getData("categorys");
      return categoryData;
    } catch (error) {
      throw error;
    }
  }
  async createCategory(item) {
    try {
      const newCategory = await insertData("categorys", item);
      return newCategory;
    } catch (error) {
      throw error;
    }
  }

  async deleteCategory(id) {
    try {
      const deleteCategory = await deleteData("categorys", id);
      return deleteCategory;
    } catch (error) {
      throw error;
    }
  }
  editCategory(id, item) {
   try {
    const editCategory = editData("categorys", id, item);
    return editCategory;
   } catch (error) {
    throw error;
   }
  }
}
