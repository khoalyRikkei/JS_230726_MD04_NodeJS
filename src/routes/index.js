const authRouter = require("./authen.route");

exports.routes = function (app) {
  app.use("/api/v1/auth", authRouter);
};
