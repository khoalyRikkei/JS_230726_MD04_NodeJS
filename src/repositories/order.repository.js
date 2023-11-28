const connection = require("../configs/db.config");

const getAllOrders = async () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM orders`;
    connection.query(query, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const getOrderById = async (orderId) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM orders WHERE orderId = ?`;
    connection.query(query, [orderId], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const createOrder = async (orderData) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO orders SET ?`;
    connection.query(query, [orderData], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const deleteOrder = async (orderId) => {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM orders WHERE orderId = ?`;
    connection.query(query, [orderId], (err, result) => {
      if (err) reject(err);
      resolve(result.affectedRows > 0);
    });
  });
};

const editOrder = async (orderId, updatedData) => {
  return new Promise((resolve, reject) => {
    const query = `UPDATE orders SET ? WHERE orderId = ?`;
    connection.query(query, [updatedData, orderId], (err, result) => {
      if (err) reject(err);
      resolve(result.affectedRows > 0);
    });
  });
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  deleteOrder,
  editOrder,
};
