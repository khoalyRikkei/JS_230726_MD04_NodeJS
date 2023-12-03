class VerifyTokenController {
  async getInfoUser(req, res, next) {
    try {
      const model = {
        user: req.user,
      };
      res.status(200).json(model.user);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new VerifyTokenController();
