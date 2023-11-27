const categoryRepository = require("../repositories/category.repository");
const { BadRequestException, ServerException } = require("../expeiptions");
class CategoryService {
  getAllCategor() {
    try {
      return categoryRepository.getAllCategory();
    } catch (error) {
      throw error;
    }
  }
  async createCategory(model) {
    try {
      const createCategory = await categoryRepository.createCategory(model.newCategory);
      if (createCategory.isNewRecord) throw new BadRequestException("Create category failed", 400);

      return createCategory;
    } catch (error) {
      throw error;
    }
  }
  async updateCategory(model) {
    try {
      const updatedCategory = categoryRepository.updateCategory(model.id, model.updateCategory);
      if (
        JSON.stringify(updatedCategory.dataValues) ==
        JSON.stringify(updatedCategory._previousDataValues)
      ) {
        console.log(222);
        throw new BadRequestException("Update category failed");
      }

      return updateCategory;
    } catch (error) {
      throw error;
    }
  }
  async deleteCategory(model) {
    try {
      const rowsAffected = await categoryRepository.deleteCategory(model.id);

      if (rowsAffected > 0) {
        return rowsAffected;
      } else {
        throw new BadRequestException("Delete category failed");
      }
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new CategoryService();
