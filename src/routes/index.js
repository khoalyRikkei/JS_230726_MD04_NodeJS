const userRouter = require("./user.route.js");
const productRouter = require("./product.route.js");
const uploadFileRouter = require("./uploadFile.route.js");
const cartRouter = require("./cart.route.js");
const orderRouter = require("./order.route.js");
const categoryRouter = require("./category.route.js");

function router(app) {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/product", productRouter);
  app.use("/api/v1/upload", uploadFileRouter);
  app.use("/api/v1/cart", cartRouter);
  app.use("/api/v1/order", orderRouter);
  app.use("/api/v1/category", categoryRouter);
}
module.exports = router;
