const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const handleError = require("./middlewares/handleErorr");
const sequelize = require("./configs/configDB");
const router = require("./routes");
require("./models");

app.use(cors({ exposedHeaders: ["Authorization", "X-Total-Products"] }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router(app);
app.use(handleError);

// sequelize
//   .sync({ alter: true })
//   .then(() => {})
//   .catch((err) => {});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
