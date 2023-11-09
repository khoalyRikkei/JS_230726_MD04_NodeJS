
import swaggerUi from "swagger-ui-express";


import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { route } from "./routes/index.js";
import handleError from "./middlewares/handleErorr.js";
import sequelize from "./database/sequelize.config.js";


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app);
app.use(handleError);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Connecting to http://localhost:${PORT}`);
});
