const authRouter = require("./auth.route.js");
const userRouter = require("./auth.route.js");

function router(app) {
  app.use("/api/v1/public/auth", authRouter);
  app.use("/api/v1/public/user", userRouter);
  app.use("/api/v1/private", () => {});
}
module.exports = router;
