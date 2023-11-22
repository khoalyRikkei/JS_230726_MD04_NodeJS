const Category = require("../entities/categories.entity");
const Favorite = require("../entities/favorites.entity");
const Product = require("../entities/products.entity");

class favoriteRepository {
  async createFavorite({ userId, productId }) {
    try {
      const response = await Favorite.findOrCreate({
        where: { productId },
        defaults: { userId, productId },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async getFavoriteByUser({ id }) {
    console.log("getFavoriteByUser", id);
    try {
      const response = await Favorite.findAll({
        where: { userId: id },
        attributes: {
          exclude: ["createdAt", "updatedAt", "productId"],
        },
        include: [
          {
            model: Product,
            as: "product",
            attributes: {
              exclude: ["createdAt", "updatedAt", "categoryId"],
            },
            include: [
              {
                model: Category,
                as: "category",
                attributes: {
                  exclude: ["createdAt", "updatedAt"],
                },
              },
            ],
          },
        ],
      });
      console.log(response, "repoooo");
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async getAllFavorite() {
    try {
      const response = await Favorite.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async deleteFavorite({ id }) {
    try {
      const response = await Favorite.destroy({
        where: { id },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new favoriteRepository();
