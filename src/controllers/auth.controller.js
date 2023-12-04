import AuthService from "../../service/auth.service.js";
import User from "../models/user.model.js";
import uploadToCloudinary from "../utils/cloudinary.js";
import { createRefreshToken, createToken, verifyToken } from "../utils/jwt.js";

const authService = new AuthService();
class AuthController {
  // =============login ===================
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

        res.status(200).json(response);
      } else {
        res.status(500).json(response);
      }
    } catch (err) {
      throw err;
    }
  }
  // ================register ====================
  async register(req, res) {
    const dataModal = { ...req.body, role: 0, status: "activate" };
    try {
      const response = await authService.checkDataRegister(dataModal);
      res.status(200).json(response);
    } catch (err) {
      throw err;
    }
  }
  // ================= logout ====================
  logout(req, res) {
    res.clearCookie("refreshToken");
    res.status(200).json("Logout successfully");
  }
  // ================= fetch user =================
  async fetchUser(req, res) {
    const { authorization } = req.headers;
    try {
      const accessToken = authorization.split(" ")[1];
      const response = verifyToken(accessToken);
      const user = await User.findOne({
        where: {
          email: response.email,
        },
      });

      res.json({
        id: user.id,
        name: user.user_name,
        email: user.email,
        address: user.address,
        avatar: user.avatar,
        role: user.role,
      });
    } catch (err) {
      res.status(500).json({ message: "token hết hạn" });
    }
  }
}
export default AuthController;
