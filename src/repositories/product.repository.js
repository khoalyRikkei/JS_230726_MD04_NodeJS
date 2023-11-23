const connection = require("../configs/db.config");

const getProducts = async () => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM products`, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
const getProductByName = async (productName) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM products WHERE productName = ?`;
    connection.query(query, [productName], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

module.exports = { getProducts, getProductByName };
