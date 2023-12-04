import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import { route } from "./routes/index.js";
import cors from "cors";
import handleError from "./middlewares/handleErorr.js";
import foreignKey from "./models/index.model.js";

// import swaggerUi from "swagger-ui-express";
// import swaggerFile from "../swagger-output.json" assert { type: "json" };

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
foreignKey();
app.options("*", cors());
app.use(
  cors({
    credentials: true,
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionSuccessStatus: 200, // Các phương thức HTTP được cho phép
    allowedHeaders: "Content-Type,Authorization", // Các headers được cho phép
    exposedHeaders: ["Authorization"],
  })
);

route(app);
app.use(handleError);
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`xin chào http://localhost:${PORT}`);
});
