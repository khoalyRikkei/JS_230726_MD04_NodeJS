const roleController = require("../controllers/role.controller");
const express = require("express");
const roleRouter = express.Router();

roleRouter.post("/", roleController.createRole);
roleRouter.get("/", roleController.getAllRole);
roleRouter.get("/:id", roleController.getOneRole);
roleRouter.put("/:id", roleController.updateRole);
roleRouter.delete("/:id", roleController.deleteRole);

module.exports = roleRouter;
