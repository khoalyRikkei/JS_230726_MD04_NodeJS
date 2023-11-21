const userRouter = require("./user.route.js");
const productRouter = require("./product.route.js");

function router(app) {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/product", productRouter);
}
module.exports = router;
