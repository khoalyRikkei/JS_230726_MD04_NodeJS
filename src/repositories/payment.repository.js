const connection = require("../configs/db.config");

const getAllPayments = async () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM payment`;
    connection.query(query, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const getPaymentById = async (payId) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM payment WHERE payId = ?`;
    connection.query(query, [payId], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const createPayment = async (paymentData) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO payment SET ?`;
    connection.query(query, [paymentData], (err, result) => {
      if (err) reject(err);
      resolve(result.insertId);
    });
  });
};

const deletePayment = async (payId) => {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM payment WHERE payId = ?`;
    connection.query(query, [payId], (err, result) => {
      if (err) reject(err);
      resolve(result.affectedRows > 0);
    });
  });
};

const editPayment = async (payId, updatedData) => {
  return new Promise((resolve, reject) => {
    const query = `UPDATE payment SET ? WHERE payId = ?`;
    connection.query(query, [updatedData, payId], (err, result) => {
      if (err) reject(err);
      resolve(result.affectedRows > 0);
    });
  });
};

module.exports = {
  getAllPayments,
  getPaymentById,
  createPayment,
  deletePayment,
  editPayment,
};
