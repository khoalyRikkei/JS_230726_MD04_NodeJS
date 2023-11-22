const categoryController = require("../controllers/category.controller");
const express = require("express");
const checkAuthentication = require("../middlewares/verifyToken");
const checkRoleUser = require("../middlewares/verifyRole");
const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.getAllCategory);
categoryRouter.post(
  "/add-category",
  checkAuthentication,
  checkRoleUser,
  categoryController.createCategory
);
categoryRouter.get(
  "/:id",
  checkAuthentication,
  checkRoleUser,
  categoryController.getOneCategory
);
categoryRouter.put(
  "/edit-category/:id",
  checkAuthentication,
  checkRoleUser,
  categoryController.updateCategory
);
categoryRouter.delete(
  "/delete-category/:id",
  checkAuthentication,
  checkRoleUser,
  categoryController.deleteCategory
);

module.exports = categoryRouter;
