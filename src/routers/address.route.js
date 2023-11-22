const addressController = require("../controllers/address.controller");
const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const verifyRole = require("../middlewares/verifyRole");
const addressRouter = express.Router();

addressRouter.post("/", verifyToken, addressController.createAddress);
addressRouter.get(
  "/",
  verifyToken,
  verifyRole,
  addressController.getAllAddress
);
addressRouter.get(
  "/addressByUser",
  verifyToken,
  addressController.getAllAddressByUser
);
addressRouter.get("/:id", verifyToken, addressController.getOneAddress);
addressRouter.put("/:id", verifyToken, addressController.updateAddress);
addressRouter.delete("/:id", verifyToken, addressController.deleteAddress);

module.exports = addressRouter;
