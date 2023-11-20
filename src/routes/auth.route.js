const express = require("express");
const authController = require("../controllers/auth.controller.js");
const {
  validationFormRegister,
  validationFormLogin,
} = require("../middlewares/handleValidation.js");

const authRouter = express.Router();

authRouter.post("/register", validationFormRegister, authController.register);
authRouter.post("/login", validationFormLogin, authController.login);

module.exports = authRouter;
