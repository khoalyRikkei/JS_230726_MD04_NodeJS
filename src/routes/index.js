const authRouter = require("./auth.route.js");
const userRouter = require("./auth.route.js");

function router(app) {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", userRouter);
}
module.exports = router;
