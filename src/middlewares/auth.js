import jwt from "jsonwebtoken";
import "dotenv/config";
export const verifyTokenAndUserAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (authorization) {
      const accessToken = authorization.split(" ")[1];
      jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token has expired" });
          }
          return res.status(401).json({ message: "Invalid token" });
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).json({ message: "No token provided" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const verifyTokenAndAdminAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (authorization) {
      const accessToken = authorization.split(" ")[1];
      jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token has expired" });
          }
          return res.status(401).json({ message: "Invalid token" });
        }
        req.user = user;
      });
      if (req.user.role === 1) {
        next();
      } else {
        return res.status(401).json({ message: "You are not an admin" });
      }
    } else {
      return res.status(401).json({ message: "No token provided" });
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
