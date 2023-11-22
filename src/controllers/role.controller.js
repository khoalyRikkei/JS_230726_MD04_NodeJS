const roleService = require("../services/role.service");

class roleController {
  async createRole(req, res) {
    try {
      const response = await roleService.createRole(req.body);
      return response.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
  async getAllRole(req, res) {
    try {
      const response = await roleService.getAllRole();
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
  async getOneRole(req, res) {
    try {
      const { id } = req.params;
      const response = await roleService.getOneRole({ id });
      return response.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "Role not found",
        });
      }
      return { error: "error" };
    }
  }
  async updateRole(req, res) {
    try {
      const { id } = req.params;
      const response = await roleService.updateRole(id, req.body);
      return response.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "Role not found",
        });
      }
      return { error: "error" };
    }
  }
  async deleteRole(req, res) {
    try {
      const { id } = req.params;
      const response = await roleService.deleteRole({ id });
      return response.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "Role not found",
        });
      }
      return { error: "error" };
    }
  }
}

module.exports = new roleController();
