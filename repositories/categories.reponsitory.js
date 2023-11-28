import Category from "../src/models/category.model.js";
import {
  deleteItemById,
  getAllItems,
  insertItem,
  updateItem,
} from "../src/utils/db.util.js";

class CategoriesReponsitory {
  async getCategories(req, res) {
    const response = await getAllItems(Category);

    return response;
  }
  async insertCategory(entityl) {
    const response = await insertItem(Category, entityl);
    return response.id;
  }
  async deleteCategoryById(id) {
    return await deleteItemById(Category, id);
  }
  async updateCategory(id, entity) {
    return await updateItem(Category, id, entity);
  }
}
export default CategoriesReponsitory;
