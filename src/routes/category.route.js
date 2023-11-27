const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");
const { authenticateToken, checkUserRole } = require("../middlewares/authMiddleware");

router.get("/", categoryController.getAllCategory);
router.post("/", authenticateToken, checkUserRole(1), categoryController.createCategory);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", authenticateToken, checkUserRole(1), categoryController.deleteCategory);

module.exports = router;
// authenticateToken, checkUserRole(1),
