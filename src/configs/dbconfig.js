import { Sequelize } from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize({
  host: "127.0.0.1",
  username: "root",
  database: process.env.SQL_DATABASE,
  password: process.env.SQL_PASSWORD,
  dialect: "mysql",
});
