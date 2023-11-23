const authRouter = require("./authen.route");
const dbRouter = require("./db.route");
const productsRouter = require("./product.route");

exports.routes = function (app) {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/db", dbRouter);

  // api product
  app.use("/api/v1/products", productsRouter);
};
