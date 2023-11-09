import { Sequelize } from "sequelize";
import "dotenv/config";

const database = process.env.SQL_DATABASE;
const password = process.env.SQL_PASSWORD;

export const sequelize = new Sequelize(database, "root", password, {
  host: "localhost",
  username: "root",
  database: database,
  password: password,
  dialect: "mysql",
});
