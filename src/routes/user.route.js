const express = require("express");
const userController = require("../controllers/user.controller.js");
const {
  validationFormRegister,
  validationFormLogin,
} = require("../middlewares/handleValidation.js");
const { uploadToCloudinaryAndReturnUrl } = require("../middlewares/uploadFileMiddleware.js");
const { authenticateToken, checkUserRole } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/register", validationFormRegister, userController.register);
router.post("/login", validationFormLogin, userController.login);
router.get("/", userController.getAllUser);
router.get("/:id", authenticateToken, userController.getUserById);
router.put("/:id", authenticateToken, uploadToCloudinaryAndReturnUrl, userController.updateUser);
router.delete("/:id", authenticateToken, checkUserRole(1), userController.deleteUser);

module.exports = router;
