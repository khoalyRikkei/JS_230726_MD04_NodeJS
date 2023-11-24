const { Sequelize } = require("sequelize");
require("dotenv").config();

const SQL_PASSWORD = process.env.SQL_PASSWORD;
const SQL_DATABASE_NAME = process.env.SQL_DATABASE_NAME;

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  database: SQL_DATABASE_NAME,
  password: SQL_PASSWORD,
  dialect: "mysql",
  port: 3307,
});
module.exports = sequelize;
