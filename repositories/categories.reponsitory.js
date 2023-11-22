import Category from "../src/models/category.model.js";
import {
  deleteItemById,
  getAllItems,
  insertItem,
  updateItem,
} from "../src/utils/db.util.js";

class CategoriesReponsitory {
  async getCategoriesReponsitory(req, res) {
    const response = await getAllItems(Category);

    return response;
  }
  async insertCategoryRepository(dataModal) {
    const response = await insertItem(Category, dataModal);
    return response.id;
  }
  async deleteCategoryByIdRepository(id) {
    return await deleteItemById(Category, id);
  }
  async updateCategoryRepository(id, dataModal) {
    return await updateItem(Category, id, dataModal);
  }
}
export default CategoriesReponsitory;
