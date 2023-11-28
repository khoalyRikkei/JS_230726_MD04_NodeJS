const express = require("express");
const { authenticateToken } = require("../middlewares/authMiddleware");
const router = express.Router();
const verifyTokenController = require("../controllers/verifyToken.controller");

router.get("/", authenticateToken, verifyTokenController.getInfoUser);

module.exports = router;
