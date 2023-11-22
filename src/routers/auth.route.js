const authController = require("../controllers/auth.controller");
const express = require("express");
const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

module.exports = authRouter;
