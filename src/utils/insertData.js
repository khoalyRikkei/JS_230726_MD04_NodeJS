// const { connection } = require("../configs/db.config");

const mysql = require("mysql2/promise");

async function insertData(tableName, data) {
  const keys = Object.keys(data[0]);

  const values = data
    .map(
      (value) =>
        "(" +
        Object.values(value)
          .map((item) => {
            if (typeof item === "string") {
              return "'" + item + "'";
            }
            return item;
          })
          .join() +
        ")"
    )
    .join();

  console.log(222, values);

  try {
    connection.query(
      `INSERT INTO ${tableName} (${keys.join()}) VALUES ${values}`,
      (err, result) => {
        if (err) console.log("Lỗi insert", err);
      }
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = { insertData };
