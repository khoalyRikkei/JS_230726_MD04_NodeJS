const roleRepository = require("../repositories/role.repository");

class roleService {
  async createRole(body) {
    try {
      const response = await roleRepository.createRole(body);
      return {
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Create Role successfully"
            : "Role is available",
      };
    } catch (error) {
      return error;
    }
  }
  async getAllRole() {
    try {
      const response = await roleRepository.getAllRole();
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return error;
    }
  }
  async getOneRole({ id }) {
    try {
      const response = await roleRepository.getOneRole({ id });
      if (response?.dataValues !== undefined) {
        return {
          success: true,
          data: response?.dataValues,
        };
      } else {
        return {
          success: false,
          message: "Role not found",
        };
      }
    } catch (error) {
      return error;
    }
  }
  async updateRole(id, body) {
    try {
      const res = await roleRepository.updateRole(id, body);
      if (res[0] === 0) {
        return {
          success: false,
          message: "Role not found",
        };
      } else {
        return {
          success: true,
          message: "Role update successfully",
        };
      }
    } catch (error) {
      return error;
    }
  }
  async deleteRole({ id }) {
    try {
      const response = await roleRepository.deleteRole({ id });
      if (response === 0) {
        return {
          success: false,
          message: "Role not found",
        };
      }
      return {
        success: response > 0 ? true : false,
        message: "Delete Role successfully",
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = new roleService();
