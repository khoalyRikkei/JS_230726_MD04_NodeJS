const { Sequelize } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize("databaseecommerce", "root", "212000", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
