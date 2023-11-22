const Review = require("../entities/reviews.entity");

class reviewRepository {
  async createReview(userId, productId, comment, rating) {
    try {
      const response = await Review.findOrCreate({
        where: { userId, productId, comment, rating },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async getAllReview() {
    try {
      const response = await Review.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new reviewRepository();
