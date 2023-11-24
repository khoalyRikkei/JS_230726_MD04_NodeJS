const connection = require("../configs/db.config");

const getAllUsers = async () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM users`;
    connection.query(query, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
const getUserById = async (id) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM users WHERE id = ?`;
    connection.query(query, [id], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const createUser = async (userData) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO users SET ?`;
    connection.query(query, [userData], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};
const getUserByName = async (name) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM users WHERE name LIKE ?`;
    connection.query(query, ["%" + name + "%"], (err, data) => {
      console.log(555555555, data);
      if (err) reject(err);
      resolve(data);
    });
  });
};
const editUserRole = async (userId, newRole) => {
  return new Promise((resolve, reject) => {
    const query = `UPDATE users SET role = ? WHERE id = ?`;
    connection.query(query, [newRole, userId], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const editUser = async (userId, newStatus) => {
  return new Promise((resolve, reject) => {
    const query = `UPDATE users SET status = ? WHERE id = ?`;
    connection.query(query, [newStatus, userId], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByName,
  editUser,
  editUserRole,
};
