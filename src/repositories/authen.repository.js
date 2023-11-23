const mysql = require("mysql2/promise");
const { connection } = require("../configs/db.config");

const getDataByEmail = async (email) => {
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







