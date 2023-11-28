const verifyTokenService = require("../services/verifyToken.service");
class VerifyTokenController {
  async getInfoUser(req, res, next) {
    try {
      const model = {
        user_id: req.user.id,
      };
      console.log(1111111, model);
      const user = await verifyTokenService.getInfoUser(model);
      const res_user = user.dataValues;
      delete res_user.password;
      console.log(res_user);
      res.status(200).json(res_user);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new VerifyTokenController();
