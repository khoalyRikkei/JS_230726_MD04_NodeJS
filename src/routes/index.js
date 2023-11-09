import authRouter from "./auth.route.js";
import userRouter from "./auth.route.js";

export default function MainRoutes(app) {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", userRouter);
}