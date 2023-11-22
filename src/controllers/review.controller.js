const reviewService = require("../services/review.service");

class reviewController {
  async createReview(req, res) {
    try {
      const response = await reviewService.createReview(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return error;
    }
  }
  async getAllReview(req, res) {
    try {
      const response = await reviewService.getAllReview();
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new reviewController();
