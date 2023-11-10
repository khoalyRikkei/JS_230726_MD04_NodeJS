import AuthService from "../../service/auth.service.js";
const authService = new AuthService();
class AuthController {
  login(req, res) {
    const response = authService.checkDataLogin(
      req.body.email,
      req.body.password
    );
    res.send(response.data);
  }
  register(req, res) {
    const response = authService.checkDataRegister(req.body);
    res.send(response.data);
  }
  loguot(req, res) {
    res.send("đăng xuất thành công");
  }
}
export default AuthController;
