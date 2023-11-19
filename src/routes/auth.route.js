const express = require("express");
const authController = require("../controllers/auth.controller.js");
const { validationFormRegister } = require("../middlewares/handleValidation.js");

const authRouter = express.Router();

authRouter.post("/register", validationFormRegister, authController.register);
authRouter.post("/login", authController.login);
authRouter.get("/user", authController.getUser);
module.exports = authRouter;
