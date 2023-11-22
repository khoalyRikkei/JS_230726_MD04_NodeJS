import session from "express-session";
import MySQLStore2 from "express-mysql-session";
import "dotenv/config";
const MySQLStore = MySQLStore2(session);

export const connection = {
  host: "localhost",
  user: "root",
  database: process.env.SQL_DATABASE,
  password: process.env.SQL_PASSWORD,
};
const sessionStore = new MySQLStore(connection);

export const sessionConfig = session({
  key: "session_cookie_name",
  secret: "session_cookie_secret",
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000000,
  },
});

sessionStore
  .onReady()
  .then(() => {
    console.log("MySQLStore ready");
  })
  .catch((error) => {
    console.error(111, error);
  });