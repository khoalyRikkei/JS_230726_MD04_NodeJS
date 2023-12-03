const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");
const { authenticateToken, checkUserRole } = require("../middlewares/authMiddleware");

router.get("/", categoryController.getAllCategory);
router.post("/create", authenticateToken, checkUserRole(1), categoryController.createCategory);
router.put("/update/:id", authenticateToken, checkUserRole(1), categoryController.updateCategory);
router.delete(
  "/delete/:id",
  authenticateToken,
  checkUserRole(1),
  categoryController.deleteCategory
);

module.exports = router;
// authenticateToken, checkUserRole(1),
