import AuthService from "../service/auth.service.js";

const authService = new AuthService();

class AuthController {
  login(req, res, next) {
    const ret = authService.performLogin(req.body.email, req.body.password);
    res.status(ret.statusCode).send(ret.message);
  }

  register(req, res, next) {
     const { id, email, userName, password, confirmPassword} = req.body;
     const user = {
       id,
       email,
       userName,
       password,
       confirmPassword,
     };
     const ret = authService.performRegister(user);
     res.status(ret.statusCode).json(ret.message);
  }

  logout(req, res) {}
}

export default AuthController;
