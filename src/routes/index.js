import { getAllItems } from "../utils/db.util.js";
import authRouter from "./auth.route.js";
import categoryRouter from "./category.route.js";
import ordersRouter from "./order.route.js";
import productsRotuer from "./products.route.js";
import usersRouter from "./users.route.js";

export function route(app) {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/products", productsRotuer);
  app.use("/api/v1/users", usersRouter);
  app.use("/api/v1/orders", ordersRouter);
  app.use("/api/v1/category", categoryRouter);
  app.get("/select",()=>{getAllItems("users")})
}
