const favoriteService = require("../services/favorite.service");

class favoriteController {
  async createFavorite(req, res) {
    console.log(req.body);
    try {
      const response = await favoriteService.createFavorite(req.body);
      return res.status(200).json(response);
    } catch (error) {
      // return internal ServerError(res)
    }
  }
  async getFavoriteByUser(req, res) {
    try {
      const { id } = req.user;
      const response = await favoriteService.getFavoriteByUser({ id });
      return res.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "Favorite not found",
        });
      }
      return { error: "error" };
    }
  }
  async getAllFavorite(req, res) {
    try {
      const response = await favoriteService.getAllFavorite();
      return res.status(200).json(response);
    } catch (error) {
      // return internal ServerError(res)
    }
  }
  async deleteFavorite(req, res) {
    try {
      const { id } = req.params;
      const response = await favoriteService.deleteFavorite({ id });
      return res.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "Favorite not found",
        });
      }
      return { error: "error" };
    }
  }
}

module.exports = new favoriteController();
