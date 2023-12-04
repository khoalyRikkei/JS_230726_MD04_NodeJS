import express from "express";
import CategoryController from "../controllers/categories.controller.js";

const categoryRouter = express.Router();
const categoryController = new CategoryController();
// get all categories
categoryRouter.get("/", categoryController.getCategory);
// craete category
categoryRouter.post("/", categoryController.insertCategory);
// delete category
categoryRouter.delete("/:id", categoryController.deleteCategory);
// update ctegory
categoryRouter.put("/:id", categoryController.updateCategory);

export default categoryRouter;
