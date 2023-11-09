import express from "express";
import MainRoutes from "./routes/index.js";
import bodyParser from "body-parser";

//

import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger_output.json" assert { type: "json" };
import "dotenv/config";
const app = express();
import cors from "cors";
import handleError from "./middlewares/handleErorr.js";
import { sequelize } from "./configs/dbConfig.js";
import User from "./models/user.model.js";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MainRoutes(app);
app.use(handleError);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Test connection
// try {
//   await sequelize.authenticate();
//   console.log(222, "Connection has been established successfully.");
// } catch (error) {
//   console.error(111, "Unable to connect to the database:", error);
// }
const port = process.env.PORT;
app.listen(8888, () => {
  console.log(`connecting to http://localhost:${8888}`);
});
