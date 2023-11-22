const mysql = require("mysql2/promise");

const getDataByEmail = async (email) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "project-3",
    password: "ltvlhk1504###***",
  });

  try {
    const [data] = await connection.execute(
      `SELECT * FROMm users WHERE email = "${email}"`
    );
    if (data.length > 0) {
      return data[0];
    }

    throw new Error("wrong email or password");
  } catch (error) {
    // console.log("error reporting", error);
    throw new Error("internal server error");
  }

  //
};

module.exports = { getDataByEmail };
