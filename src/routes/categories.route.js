import express from "express";
import CategoryController from "../controllers/categories.controller.js";

const categoryRouter = express.Router();
const categoryController = new CategoryController();
// get all categories
categoryRouter.get("/", categoryController.getCategory);
categoryRouter.post("/", categoryController.insertCategory);
categoryRouter.delete("/:id", categoryController.deleteCategory);
categoryRouter.put("/:id", categoryController.updateCategory);

export default categoryRouter;
