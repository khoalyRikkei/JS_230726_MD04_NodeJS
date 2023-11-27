const categoryService = require("../services/category.service");

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await categoryService.getCategoryById(categoryId);

    if (!category || category.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getCategoryByName = async (req, res) => {
  try {
    const categoryName = req.params.name;
    const category = await categoryService.getCategoryByName(categoryName);

    if (!category || category.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createCategory = async (req, res) => {
  try {
    const newCategoryId = await categoryService.createCategory(req.body);
    res
      .status(201)
      .json({ id: newCategoryId, message: "Category created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const result = await categoryService.deleteCategory(categoryId);

    if (result) {
      res.status(200).json({ message: "Category deleted successfully" });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  getAllCategories,
  getCategoryById,
  getCategoryByName,
  createCategory,
  deleteCategory,
};
