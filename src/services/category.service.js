const categoryRepository = require("../repositories/category.repository");

const getAllCategories = async () => {
  return await categoryRepository.getAllCategories();
};
const getCategoryById = async (categoryId) => {
  return await categoryRepository.getCategoryById(categoryId);
};

const getCategoryByName = async (categoryName) => {
  return await categoryRepository.getCategoryByName(categoryName);
};
const createCategory = async (categoryData) => {
  return await categoryRepository.createCategory(categoryData);
};

const deleteCategory = async (categoryId) => {
  return await categoryRepository.deleteCategory(categoryId);
};
module.exports = {
  getAllCategories,
  getCategoryById,
  getCategoryByName,
  createCategory,
  deleteCategory,
};
