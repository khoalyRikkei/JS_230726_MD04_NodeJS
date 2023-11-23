import CategoriesService from "../../service/categories.service.js";

const categoriesService = new CategoriesService();

class CategoryController {
  async getCategory(req, res) {
    try {
      const listCategories = await categoriesService.getCategoriesService();
      res.status(200).json(listCategories);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message, err: error });
    }
  }
  async insertCategory(req, res) {
    const dataModal = { ...req.body, status: true };
    try {
      const response = await categoriesService.insertCategoryService(dataModal);
      res.status(200).send(response.message);
    } catch (err) {
      throw err;
    }
  }
  async deleteCategory(req, res) {
    try {
      const response = await categoriesService.deleteCategoryByIdService(
        req.params.id
      );
      res.status(200).send(response);
    } catch (err) {
      throw err;
    }
  }
  updateCategory(req, res) {
    const dataModal = { ...req.body, status: false };
    const response = categoriesService.updateCategoryService(
      req.params.id,
      dataModal
    );
    res.send(response);
  }
}
export default CategoryController;
