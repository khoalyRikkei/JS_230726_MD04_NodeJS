const routerProduct = require("./productRouter");
const userRouter = require("./userRouter");

function router(app) {
  //router product
  app.use("/product", routerProduct);

  //router user
  app.use("/user", userRouter);
}
module.exports = router;
