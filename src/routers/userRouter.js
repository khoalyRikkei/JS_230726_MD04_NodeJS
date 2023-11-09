const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.get("/", userController.getAllUser);

router.post("/", userController.createUser);

router.put("/", userController.updateUser);

router.delete("/", userController.deleteUser);

module.exports = router;
