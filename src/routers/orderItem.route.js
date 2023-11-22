const orderItemController = require("../controllers/orderItem.controller");
const express = require("express");
const orderItemRouter = express.Router();
const checkAuthentication = require("../middlewares/verifyToken");
const checkRoleUser = require("../middlewares/verifyRole");

orderItemRouter.post(
  "/",
  checkAuthentication,
  orderItemController.createOrderItem
);
orderItemRouter.get(
  "/",
  checkAuthentication,
  checkRoleUser,
  orderItemController.getAllOrderItem
);
orderItemRouter.get(
  "/one",
  checkAuthentication,
  orderItemController.getOrderItemByUser
);

module.exports = orderItemRouter;
