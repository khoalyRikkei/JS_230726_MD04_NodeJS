import jwt from "jsonwebtoken";
import "dotenv/config";

export const createToken = (data) => {
  return jwt.sign(data, process.env.SECRET_KEY, { expiresIn: "1d" });
};
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded;
  } catch (error) {
    return error;
  }
};
export const createRefreshToken = (data) => {
  return jwt.sign(data, "1111", { expiresIn: "30d" });
};
