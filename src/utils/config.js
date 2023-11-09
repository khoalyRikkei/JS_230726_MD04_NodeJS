import mysql from "mysql2";
import "dotenv/config";

export const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: process.env.SQL_DATABASE,
  password: process.env.SQL_PASSWORD,
});