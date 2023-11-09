import CategoryService from "../service/category.service.js";
const categoryService = new CategoryService();
class CategoryController {
  async getAllCategories(req, res) {
    try {
      const ret = await categoryService.getCategory();
      res.status(200).json(ret);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async createCategory(req, res) {
    const categoryData = req.body;
    try {
      const ret = await categoryService.createCategory(categoryData);
      return res.status(201).json(ret);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async deleteCategory(req, res) {
    try {
      const categoryId = req.params.id;
      const ret = await categoryService.deleteCategory(categoryId);

      if (ret > 0) {
        res.status(200).json({ message: "Category deleted successfully" });
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async editCategory(req, res) {
    const categoryId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedCategory = await categoryService.editCategory(
        categoryId,
        updatedData
      );

      if (updatedCategory) {
        return res
          .status(200)
          .json({
            message: "Category updated successfully",
            id: updatedCategory.id,
          });
      } else {
        return res
          .status(404)
          .json({ message: "Category not found or not updated" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
export default CategoryController;
