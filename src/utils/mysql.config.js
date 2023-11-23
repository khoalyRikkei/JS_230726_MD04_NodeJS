import mysql from "mysql2";
import "dotenv/config";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: process.env.SQL_DATABASE,
  password: process.env.SQL_PASSWORD,
});