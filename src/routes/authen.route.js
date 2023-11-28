const express = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.post("/login", authController.login);

authRouter.post("/register", function (req, res) {
  res.send("register");
});

authRouter.get("/logout", function (req, res) {
  res.send("logged out");
});

module.exports = authRouter;
