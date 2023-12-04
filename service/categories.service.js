import CategoriesReponsitory from "../repositories/categories.reponsitory.js";

const categoriesReponsitory = new CategoriesReponsitory();
class CategoriesService {
  // ================ getCategories =======================
  async getCategories(req, res) {
    const response = categoriesReponsitory.getCategories();
    return response;
  }
  // ================ insert category ====================
  insertCategory(dataModal) {
    const response= categoriesReponsitory.insertCategory(dataModal);
    return  response
  }
  // ================ delete category ===================
  async deleteCategoryById(id) {
    return await categoriesReponsitory.deleteCategoryById(id);
  }
  // ================== update category =================
  async updateCategory(id,dataModal){
    return await categoriesReponsitory.updateCategory(id,dataModal);
    
  }
}
export default CategoriesService;
