import express from "express";
import CategoryController from "../controller/category.controller.js";
const categoryRouter = express.Router();
const categoryController = new CategoryController()

// API Category

categoryRouter.get("/", categoryController.getAllCategories);

categoryRouter.post("/", categoryController.createCategory);

categoryRouter.delete("/:id", categoryController.deleteCategory);

categoryRouter.put("/:id", categoryController.editCategory);

export default categoryRouter;
