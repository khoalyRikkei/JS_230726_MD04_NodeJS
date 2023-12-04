import CategoriesService from "../../service/categories.service.js";

const categoriesService = new CategoriesService();

class CategoryController {
  // ============== get all categories =================
  async getCategory(req, res) {
    try {
      const listCategories = await categoriesService.getCategories();
      res.status(200).json(listCategories);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message, err: error });
    }
  }
  //  =============== insert new category =================
  async insertCategory(req, res) {
    const dataModal = { ...req.body, status: true };
    try {
      const response = await categoriesService.insertCategory(dataModal);
      res.status(200).send(response.message);
    } catch (err) {
      throw err;
    }
  }
  //  ======================delete category =================
  async deleteCategory(req, res) {
    try {
      const response = await categoriesService.deleteCategoryById(
        req.params.id
      );
      res.status(200).send(response);
    } catch (err) {
      throw err;
    }
  }
  // ================== update category ===================
  updateCategory(req, res) {
    const dataModal = { ...req.body, status: false };
    const response = categoriesService.updateCategory(
      req.params.id,
      dataModal
    );
    res.send(response);
  }
}
export default CategoryController;
