import CategoryRepository from "../repository/category.repository.js";

const categoryRepository = new CategoryRepository();

export default class CategoryService {
  async getCategory() {
    try {
      const data = await categoryRepository.getCategory();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getCategoryById(id) {
    try {
      const categoryById = await categoryRepository.getCategoryById(id);
      return categoryById;
    } catch (error) {
      throw error;
    }
  }

  async createCategory(item) {
    try {
      const data = await categoryRepository.createCategory(item);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteCategory(id) {
    try {
      const data = await categoryRepository.deleteCategory(id);
      return data;
    } catch (error) {
      throw error;
    }
  }

  editCategory(id, item) {
    try {
      const data = categoryRepository.editCategory(id, item);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
