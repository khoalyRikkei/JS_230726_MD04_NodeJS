const authService = require("../services/auth.service");
class authController {
  async register(req, res) {
    console.log(req.body, "kkkk");
    try {
      const response = await authService.register(req.body);
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
  async login(req, res) {
    console.log(req.body, "mmmm");
    try {
      const response = await authService.login(req.body);
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
}
module.exports = new authController();
