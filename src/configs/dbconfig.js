import { Sequelize } from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  database: process.env.SQL_DATABASE,
  password: process.env.SQL_PASSWORD,
  dialect: "mysql",
});
