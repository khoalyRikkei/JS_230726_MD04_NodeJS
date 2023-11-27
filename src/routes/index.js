const authRouter = require("./authen.route");
const cartRouter = require("./cart.route");
const cateRouter = require("./category.route");
const dbRouter = require("./db.route");
const productsRouter = require("./product.route");
const userRouter = require("./user.route");

exports.routes = function (app) {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/db", dbRouter);

  // api product
  app.use("/api/v1/products", productsRouter);

  // api user
  app.use("/api/v1/users", userRouter);

  // api category
  app.use("/api/v1/category", cateRouter);

  // api cart
  app.use("/api/v1/cart", cartRouter);
};
