const reviewRepository = require("../repositories/review.repository");

class reviewService {
  async createReview({ userId, productId, comment, rating }) {
    const response = await reviewRepository.createReview(
      userId,
      productId,
      comment,
      rating
    );
    try {
      return {
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Create Review successfully"
            : "Review is available",
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async getAllReview() {
    try {
      const response = await reviewRepository.getAllReview();
      return {
        success: true,
        response: response,
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = new reviewService();
