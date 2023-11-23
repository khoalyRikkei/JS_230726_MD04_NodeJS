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
    const query = `SELECT * FROM products WHERE productName LIKE '%?%'`;
    connection.query(query, [productName], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
const getProductById = async (productId) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM products WHERE productId = ?`;
    connection.query(query, [productId], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const createProduct = async (productData) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO products SET ?`;
    connection.query(query, [productData], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};
const deleteProduct = async (productId) => {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM products WHERE productId = ?`;
    connection.query(query, [productId], (err, result) => {
      if (err) reject(err);
      resolve(result.affectedRows);
    });
  });
};

module.exports = {
  getProducts,
  getProductByName,
  createProduct,
  getProductById,
  createProduct,
  deleteProduct,
};
