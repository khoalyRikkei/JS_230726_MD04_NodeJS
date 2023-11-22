const favoriteController = require("../controllers/favorite.controller");
const express = require("express");
const checkAuthentication = require("../middlewares/verifyToken");
const favoriteRouter = express.Router();

favoriteRouter.post(
  "/",
  checkAuthentication,
  favoriteController.createFavorite
);
favoriteRouter.get("/", favoriteController.getAllFavorite);
favoriteRouter.get(
  "/favorite-by-user",
  checkAuthentication,
  favoriteController.getFavoriteByUser
);
favoriteRouter.delete(
  "/favorite-by-user/:id",
  checkAuthentication,
  favoriteController.deleteFavorite
);

module.exports = favoriteRouter;
