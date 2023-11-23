import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import { route } from "./routes/index.js";
import cors from "cors";
import handleError from "./middlewares/handleErorr.js";
import { sessionConfig } from "./configs/session.config.js";
import multer from "multer";
import uploadToCloudinary from "./utils/cloudinary.js";


// import swaggerUi from "swagger-ui-express";
// import swaggerFile from "../swagger-output.json" assert { type: "json" };

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(sessionConfig);

route(app);
app.use(handleError);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`xin chào http://localhost:${PORT}`);
});
