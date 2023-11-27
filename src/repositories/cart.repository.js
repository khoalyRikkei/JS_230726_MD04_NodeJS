const connection = require("../configs/db.config");

const getAllCart = async () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM cart`;
    connection.query(query, (err, data) => {
      console.log(111, err);
      if (err) reject(err);
      resolve(data);
    });
  });
};

const getCartById = async (cartId) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM cart WHERE cartId = ?`;
    connection.query(query, [cartId], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const createCart = async (cartData) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO cart SET ?`;
    connection.query(query, [cartData], (err, result) => {
      if (err) reject(err);
      resolve(result.insertId);
    });
  });
};

const deleteCart = async (cartId) => {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM cart WHERE cartId = ?`;
    connection.query(query, [cartId], (err, result) => {
      if (err) reject(err);
      resolve(result.affectedRows > 0);
    });
  });
};

const editCart = async (cartId, updatedData) => {
  return new Promise((resolve, reject) => {
    const query = `UPDATE cart SET ? WHERE cartId = ?`;
    connection.query(query, [updatedData, cartId], (err, result) => {
      if (err) reject(err);
      resolve(result.affectedRows > 0);
    });
  });
};

module.exports = { getAllCart, getCartById, createCart, deleteCart, editCart };
