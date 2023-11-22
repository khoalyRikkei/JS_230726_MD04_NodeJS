const favoriteRepository = require("../repositories/favorite.repository");

class favoriteService {
  async createFavorite({ userId, productId }) {
    try {
      const response = await favoriteRepository.createFavorite({
        userId,
        productId,
      });
      console.log(response);
      return {
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Create Favorite successfully"
            : "Favorite is available",
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async getFavoriteByUser({ id }) {
    try {
      const response = await favoriteRepository.getFavoriteByUser({ id });
      console.log(response);
      if (response[0]?.dataValues !== undefined) {
        return {
          success: true,
          data: response[0]?.dataValues,
        };
      } else {
        return {
          success: false,
          message: "Favorite is not available",
        };
      }
    } catch (error) {
      return error;
    }
  }
  async getAllFavorite() {
    try {
      const response = await favoriteRepository.getAllFavorite();
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return error;
    }
  }
  async deleteFavorite({ id }) {
    try {
      const response = await favoriteRepository.deleteFavorite({ id });
      if (response === 0) {
        return {
          success: false,
          message: "Favorite not found",
        };
      }
      return {
        success: response > 0 ? true : false,
        message: "Favorite deleted",
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = new favoriteService();
