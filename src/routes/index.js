const authRouter = require("./authen.route");
const cartRouter = require("./cart.route");
const cateRouter = require("./category.route");
const dbRouter = require("./db.route");
const orderRouter = require("./order.route");
const payRouter = require("./payment.route");
const productsRouter = require("./product.route");
const userRouter = require("./user.route");

exports.routes = function (app) {
  app.use("/auth", authRouter);
  app.use("/db", dbRouter);

  // api product
  app.use("/products", productsRouter);

  // api user
  app.use("/users", userRouter);

  // api category
  app.use("/category", cateRouter);

  // api cart
  app.use("/cart", cartRouter);

  // api payment
  app.use("/payment", payRouter);

  // api order
  app.use("/order", orderRouter);
};
