const imageController = require("../controllers/image.controller");
const express = require("express");
const checkAuthentication = require("../middlewares/verifyToken");
const checkRoleUser = require("../middlewares/verifyRole");
const uploadCloud = require("../middlewares/uploadFile");
const imageRouter = express.Router();

imageRouter.post(
  "/",
  checkAuthentication,
  checkRoleUser,
  uploadCloud.array("imgSrc", 3),
  imageController.createImage
);
imageRouter.get(
  "/",
  checkAuthentication,
  checkRoleUser,
  imageController.getAllImage
);
imageRouter.get(
  "/:id",
  checkAuthentication,
  checkRoleUser,
  imageController.getOneImage
);
imageRouter.put(
  "/:id",
  uploadCloud.single("imgSrc"),
  checkAuthentication,
  checkRoleUser,
  imageController.updateImage
);
imageRouter.delete(
  ":/id",
  checkAuthentication,
  checkRoleUser,
  imageController.deleteImage
);

module.exports = imageRouter;
