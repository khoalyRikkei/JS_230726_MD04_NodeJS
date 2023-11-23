import AuthService from "../../service/auth.service.js";
import { createRefreshToken, createToken } from "../utils/jwt.js";
const authService = new AuthService();
class AuthController {
  async login(req, res) {
    try {
      const response = await authService.checkDataLogin(
        req.body.email,
        req.body.password
      );
      if (response.status) {
        const token = createToken({
          email: response.data.email,
          role: response.data.role,
        });
        const refreshToken = createRefreshToken({
          email: response.data.email,
          role: response.data.role,
        });
        res.header("Authorization", "Bearer " + token);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          scure: true,
          path: "/",
          sameSite: "strict",
        });
        // req.session.email = response.data.email;
        // req.session.role = response.data.role;
        res.status(200).json(response);
      }
    } catch (err) {
      throw err;
    }
  }
  async register(req, res) {
    const dataModal = { ...req.body, role: 0 };
    const response = await authService.checkDataRegister(dataModal);
    res.status(200).json(response);
  }
  loguot(req, res) {
    console.log(111111);
    res.clearCookie("refreshToken");
    res.status(200).json("Logout successfully");
  }
}
export default AuthController;
