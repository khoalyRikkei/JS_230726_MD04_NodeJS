import express from "express";
import MainRoutes from "./routes/index.js";
import bodyParser from "body-parser";
import "dotenv/config";
const app = express();
import cors from "cors";
import handleError from "./middlewares/handleErorr.js";
import { sequelize } from "./configs/dbConfig.js";
import User from "./models/user.model.js";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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