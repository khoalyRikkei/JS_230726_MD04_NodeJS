const addressRouter = require("./address.route");
const authRouter = require("./auth.route");
const cartRouter = require("./cart.route");
const categoryRouter = require("./category.route");
const favoriteRouter = require("./favorite.route");
const imageRouter = require("./image.route");
const orderRouter = require("./order.route");
const orderItemRouter = require("./orderItem.route");
const productRouter = require("./product.route");
const reviewRouter = require("./review.route");
const roleRouter = require("./role.route");
const userRouter = require("./user.route");

function Router(app) {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", userRouter);
  app.use("api/v1/role", roleRouter);
  app.use("/api/v1/image", imageRouter);
  app.use("/api/v1/product", productRouter);
  app.use("/api/v1/cart", cartRouter);
  app.use("/api/v1/order", orderRouter);
  app.use("/api/v1/orderItem", orderItemRouter);
  app.use("/api/v1/address", addressRouter);
  app.use("/api/v1/review", reviewRouter);
  app.use("/api/v1/favorite", favoriteRouter);
  app.use("/api/v1/category", categoryRouter);
}

module.exports = Router;
