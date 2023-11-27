const express = require("express");
const categoryController = require("../controllers/category.controller");

const cateRouter = express.Router();

cateRouter.get("/", categoryController.getAllCategories);

cateRouter.get("/:id", categoryController.getCategoryById);

cateRouter.get("/search/:name", categoryController.getCategoryByName);

cateRouter.post("/", categoryController.createCategory);

cateRouter.delete("/:id", categoryController.deleteCategory);

module.exports = cateRouter;
