const express = require("express");
const userController = require("../controllers/user.controller.js");
const {
  validationFormRegister,
  validationFormLogin,
} = require("../middlewares/handleValidation.js");
const { authenticateToken, checkUserRole } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/register", validationFormRegister, userController.register);
router.post("/login", validationFormLogin, userController.login);
router.get("/", userController.getAllUser);
router.get("/:id", authenticateToken, checkUserRole(1), userController.getUserById);
router.put("/:id", authenticateToken, userController.updateUser);
router.put("/:id/block", authenticateToken, checkUserRole(1), userController.updateStatusUser);

module.exports = router;
