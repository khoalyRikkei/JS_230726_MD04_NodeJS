const bodyParser = require("body-parser");
const express = require("express");
const router = require("./routers");
require("dotenv").config();
//thay the server
const app = express();
const port = process.env.PORT || 3000;
const SQL_DATABASE = process.env.SQL_DATABASE;
const SQL_PASSWORD = process.env.SQL_PASSWORD;

// dung middleware bodyParser de lay du lieu tu body http reques
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//router
router(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

createAllTable()

app.use((a, b, c, d) => {
  console.log("a");
});
