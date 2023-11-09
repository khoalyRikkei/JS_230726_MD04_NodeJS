import express from "express";
import CategoryController from "../controller/category.controller.js";
import {
  validateCreateCategory,
  validateEditCategory,
} from "../validations/category.validation.js";

const categoryRouter = express.Router();
const categoryController = new CategoryController();

// API Category

categoryRouter.get("/", categoryController.getAllCategories);

categoryRouter.get("/:id", categoryController.getCategoryById);

categoryRouter.post(
  "/",
  validateCreateCategory,
  categoryController.createCategory
);

categoryRouter.delete("/:id", categoryController.deleteCategory);

categoryRouter.put(
  "/:id",
  validateEditCategory,
  categoryController.editCategory
);

export default categoryRouter;
