import express from "express";
import CategoryController from "../controllers/category.controller.js";

const categoryRouter = express.Router();
const categoryController = new CategoryController();
// get all categories
categoryRouter.get("/", categoryController.getCategory);

export default categoryRouter;
