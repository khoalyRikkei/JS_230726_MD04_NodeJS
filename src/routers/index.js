const routerProduct = require("./productRouter");

function router(app) {
  app.use("/product", routerProduct);
  //router category
}
module.exports = router;
