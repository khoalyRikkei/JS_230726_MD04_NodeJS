import uploadToCloudinary from "../utils/cloudinary.js";
import upload from "../utils/multer.js";
import authRouter from "./auth.route.js";
import cartsRouter from "./carts.route.js";
import categoryRouter from "./categories.route.js";
import ordersRouter from "./orders.route.js";
import productsRotuer from "./products.route.js";
import usersRouter from "./users.route.js";

export function route(app) {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/products", productsRotuer);
  app.use("/api/v1/users", usersRouter);
  app.use("/api/v1/orders", ordersRouter);
  app.use("/api/v1/categories", categoryRouter);
  app.use("/api/v1/carts", cartsRouter);
  app.post("/api/v1/upload", upload.single("file"), async (req, res, next) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const result = await uploadToCloudinary(req.file);
    try {
      return res.status(201).json({
        url: result.url,
        id: result.public_id,
      });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  });
}
