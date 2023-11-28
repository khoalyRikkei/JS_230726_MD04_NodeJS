const connection = require("../configs/db.config");

const getDataByEmail = async (email) => {
  try {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE email = ?`;
      connection.query(query, [email], (err, result) => {
        if (err) reject(err);
        if (result.length > 0) {
          resolve(result[0]);
        } else {
          reject({ statusCode: 400, message: "Email is incorrect" });
        }
      });
    });
  } catch (error) {
    throw { statusCode: 500, message: "Internal Server Error" };
  }

  //
};

module.exports = { getDataByEmail };
