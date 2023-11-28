import CategoriesReponsitory from "../repositories/categories.reponsitory.js";

const categoriesReponsitory = new CategoriesReponsitory();
class CategoriesService {
  async getCategories(req, res) {
    const response = categoriesReponsitory.getCategories();
    return response;
  }
  insertCategory(dataModal) {
    const response= categoriesReponsitory.insertCategory(dataModal);
    return  response
  }
  async deleteCategoryById(id) {
    return await categoriesReponsitory.deleteCategoryById(id);
  }
  async updateCategory(id,dataModal){
    return await categoriesReponsitory.updateCategory(id,dataModal);
    
  }
}
export default CategoriesService;
