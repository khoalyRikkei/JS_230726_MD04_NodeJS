const { response } = require("express");
const userService = require("../services/user.service");

class userControllers {
  async getAllUser(req, res) {
    try {
      const response = await userService.getAllUser();
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
  async getOneUser(req, res) {
    try {
      const { id } = req.user;
      const response = await userService.getOneUser({ id });
      return res.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "User not found",
        });
      }
      return { error: "error" };
    }
  }
  async updateUser(req, res) {
    const { id } = req.user;
    try {
      const response = await userService.updateUser(id, req.body);
      return response.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "User not found",
        });
      }
      return { error: "error" };
    }
  }
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const response = await userService.deleteUser({ id });
      return res.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "User not found",
        });
      }
      return { error: "error" };
    }
  }
}

module.exports = new userControllers();
