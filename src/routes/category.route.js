import express from "express";
import CategoryController from "../controller/category.controller.js";
import {
  validateCreateCategory,
  validateEditCategory,
} from "../validations/category.validation.js";

const categoryRouter = express.Router();
const categoryController = new CategoryController();

// API Category

categoryRouter.get("/search", categoryController.searchCategoryByCondition);

categoryRouter.get("/trash", categoryController.getAllDeletedCategory);

categoryRouter.get("/trash/:id", categoryController.getDeletedCategoryById);

categoryRouter.get("/", categoryController.getAllCategories);

categoryRouter.get("/:id", categoryController.getCategoryById);

categoryRouter.delete("/:id", categoryController.softDeleteCategory);

categoryRouter.delete("/del-forever", categoryController.deleteCategory);

categoryRouter.put("/restore", categoryController.restoreCategory);

categoryRouter.put(
  "/:id",
  validateEditCategory,
  categoryController.editCategory
);

categoryRouter.post(
  "/",
  validateCreateCategory,
  categoryController.createCategory
);



export default categoryRouter;
