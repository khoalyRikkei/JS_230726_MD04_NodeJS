const moment = require("moment");
const authService = require("../services/auth.service");
const { ServerException, CustomException } = require("../expeiptions");
class AuthController {
  async register(req, res, next) {
    try {
      const model = {
        user_name: req.body.user_name,
        full_name: req.body.full_name,
        email: req.body.email,
        password: req.body.password,
        role: 0,
        status: 1,
        phone: req.body.phone,
        address: req.body.address,
        avatar: req.body.avatar,
        created_at: moment(new Date()).format("YYYY-MM-DD"),
        updated_at: moment(new Date()).format("YYYY-MM-DD"),
      };
      const response = await authService.register(model);
      if (response) {
        res.status(200).json(response);
      } else {
        const err = new CustomException("User already exists", 400);
        next(err);
      }
    } catch (error) {
      const err = new ServerException("ServerException", 500, error.message);
      next(err);
    }
  }
  async login(req, res, next) {
    try {
      const model = {
        email: req.body.email,
        password: req.body.password,
      };
      const response = await authService.login(model);

      // Set access token vào header
      res.setHeader("Authorization", `Bearer ${response.ac_token}`);

      res.cookie("refreshToken", response.ac_refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      }); // Thời gian sống 7 ngày

      res.status(200).json({ token: response.ac_token });
    } catch (error) {
      const err = new ServerException("ServerException", 500, error.message);
      next(err);
    }
  }
}
module.exports = new AuthController();
