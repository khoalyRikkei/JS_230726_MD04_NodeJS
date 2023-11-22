import express from "express";
import CategoryController from "../controller/category.controller.js";
import {
  validateCreateCategory,
  validateEditCategory,
} from "../validations/category.validation.js";

const categoryRouter = express.Router();
const categoryController = new CategoryController();

// API Category

categoryRouter.get("/search", categoryController.searchCategoryByName);

categoryRouter.get("/", categoryController.getAllCategories);

categoryRouter.get("/trash", categoryController.getAllDeletedCategory);

categoryRouter.get("/:id", categoryController.getCategoryById);

categoryRouter.get("/trash/:id", categoryController.getDeletedCategoryById);

categoryRouter.post(
  "/",
  validateCreateCategory,
  categoryController.createCategory
);

categoryRouter.delete("/:id", categoryController.softDeleteCategory);

categoryRouter.delete("/del-forever", categoryController.deleteCategory);

categoryRouter.put("/restore", categoryController.restoreCategory);

categoryRouter.put(
  "/:id",
  validateEditCategory,
  categoryController.editCategory
);



export default categoryRouter;
