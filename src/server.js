import express from "express";
import MainRoutes from "./routes/index.js";
import bodyParser from "body-parser";
import "dotenv/config";

import cors from "cors";
import handleError from "./middlewares/handleError.js";
import { sequelize } from "./configs/dbConfig.js";
import User from "./models/user.model.js";
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.urlencoded());

MainRoutes(app);
app.use(handleError);

// Test connection
// try {
//   await sequelize.authenticate();
//   console.log(222, "Connection has been established successfully.");
// } catch (error) {
//   console.error(111, "Unable to connect to the database:", error);
// }
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`connecting to http://localhost:${port}`);
});
