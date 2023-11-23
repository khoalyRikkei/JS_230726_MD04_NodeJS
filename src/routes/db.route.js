const express = require("express");
const { insertData } = require("../utils/insertData");
const { productsDB } = require("../data/product-data");

const dbRouter = express.Router();

dbRouter.post("/add-product", (req, res) => {
  insertData("products", productsDB);
});

module.exports = dbRouter;
