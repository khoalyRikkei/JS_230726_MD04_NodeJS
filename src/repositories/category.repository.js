const connection = require("../configs/db.config");

const getAllCategories = async () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM category`;
    connection.query(query, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
const getCategoryById = async (categoryId) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM category WHERE categoryId = ?`;
    connection.query(query, [categoryId], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
const getCategoryByName = async (categoryName) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM category WHERE categoryName LIKE ?`;
    connection.query(query, ["%" + categoryName + "%"], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const createCategory = async (categoryData) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO category SET ?`;
    connection.query(query, [categoryData], (err, result) => {
      if (err) reject(err);
      resolve(result.insertId);
    });
  });
};

const deleteCategory = async (categoryId) => {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM category WHERE categoryId = ?`;
    connection.query(query, [categoryId], (err, result) => {
      if (err) reject(err);
      resolve(result.affectedRows > 0);
    });
  });
};

module.exports = {
  getAllCategories,
  getCategoryById,
  getCategoryByName,
  createCategory,
  deleteCategory,
};
