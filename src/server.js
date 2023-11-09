import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { route } from "./routes/index.js";
import sequelize from "./database/sequelize.config.js";
import { Category } from "./models/category.model.js";

const app = express();
// Dùng middleware bodyParser để lấy dữ liệu từ body gttp request
app.use(bodyParser.urlencoded({ extended: true }));

route(app);

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// };

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Connecting to http://localhost:${PORT}`);
});
