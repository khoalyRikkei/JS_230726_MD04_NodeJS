const userRepository = require("../repositories/user.repository");

const createUser = async (userData) => {
  return await userRepository.createUser(userData);
};

const getAllUsers = async () => {
  return await userRepository.getAllUsers();
};
const getUserById = async (id) => {
  return await userRepository.getUserById(id);
};
const getUserByName = async (name) => {
  return await userRepository.getUserByName(name);
};

const editUser = async (userId, newStatus) => {
  return await userRepository.editUser(userId, newStatus);
};

const editUserRole = async (userId, newRole) => {
  return await userRepository.editUserRole(userId, newRole);
};
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByName,
  editUser,
  editUserRole,
};
