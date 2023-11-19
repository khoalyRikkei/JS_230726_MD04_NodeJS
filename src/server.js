const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const handleError = require("./middlewares/handleErorr");
const sequelize = require("./configs/configDB");
const router = require("./routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// sequelize
//   .sync()
//   .then(() => {})
//   .catch((err) => {});

router(app);
app.use(handleError);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
