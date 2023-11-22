const Role = require("../entities/roles.entity");

class roleRepository {
  async createRole(body) {
    try {
      const response = await Role.findOrCreate({
        where: { role: body.role },
        defaults: { role: body.role },
      });
      console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  }
  async getAllRole() {
    try {
      const response = await Role.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async getOneRole({ id }) {
    try {
      const response = await Role.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async updateRole(id, body) {
    try {
      const response = await Role.update(body, {
        where: { id },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async deleteRole({ id }) {
    try {
      const response = await Role.destroy({
        where: { id },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new roleRepository();
