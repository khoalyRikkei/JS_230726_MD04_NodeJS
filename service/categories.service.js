import CategoriesReponsitory from "../repositories/categories.reponsitory.js";

const categoriesReponsitory = new CategoriesReponsitory();
class CategoriesService {
  async getCategoriesService(req, res) {
    const response = categoriesReponsitory.getCategoriesReponsitory();
    return response;
  }
  insertCategoryService(dataModal) {
    const response= categoriesReponsitory.insertCategoryRepository(dataModal);
    return  response
  }
  async deleteCategoryByIdService(id) {
    return await categoriesReponsitory.deleteCategoryByIdRepository(id);
  }
  async updateCategoryService(id,dataModal){
    return await categoriesReponsitory.updateCategoryRepository(id,dataModal);
    
  }
}
export default CategoriesService;
