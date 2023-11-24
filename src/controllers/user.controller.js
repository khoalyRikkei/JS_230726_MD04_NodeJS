const userService = require("../services/user.service");

const createUser = async (req, res) => {
  try {
    const newUserId = await userService.createUser(req.body);
    res
      .status(201)
      .json({ id: newUserId, message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userService.getUserById(id);

    if (!user || user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getUserByName = async (req, res) => {
  try {
    const name = req.params.name;
    const user = await userService.getUserByName(name);

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const editUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const newStatus = req.body.status;

    const result = await userService.editUser(userId, newStatus);

    res.status(200).json({ message: "User status updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const editUserRole = async (req, res) => {
  try {
    const userId = req.params.id;
    const newRole = req.body.role;

    const result = await userService.editUserRole(userId, newRole);

    res.status(200).json({ message: "User role updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByName,
  editUser,
  editUserRole,
};
