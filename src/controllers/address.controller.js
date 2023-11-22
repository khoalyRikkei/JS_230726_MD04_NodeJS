const addressService = require("../services/address.service");

class addressController {
  async createAddress(req, res) {
    try {
      const response = await addressService.createAddress(
        req.body,
        req.user.id
      );
      return res.status(200).json(response);
    } catch (error) {
      // return internal ServerError(res)
    }
  }
  async getAllAddress(req, res) {
    try {
      const response = await addressService.getAllAddress();
      return res.status(200).json(response);
    } catch (error) {
      // return internal ServerError(res)
    }
  }
  async getAllAddressByUser(req, res) {
    try {
      const { id } = req.user;
      const response = await addressService.getAllAddressByUser({ id });
      return res.status(200).json(response);
    } catch (error) {
      // return internal ServerError(res)
    }
  }
  async getOneAddress(req, res) {
    try {
      const { id } = req.user;
      const response = await addressService.getOneAddress({ id });
      return res.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "Address not found",
        });
      }
      return { error: "error" };
    }
  }
  async updateAddress(req, res) {
    try {
      const { id } = req.params;
      const response = await addressService.updateAddress(id, req.body);
      return res.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "Address not found",
        });
      }
      return { error: "error" };
    }
  }
  async deleteAddress(req, res) {
    try {
      const { id } = req.params;
      const response = await addressService.deleteAddress({ id });
      return res.status(200).json(response);
    } catch (error) {
      if (error.success === false) {
        return res.status(404).json({
          error: true,
          message: "Address not found",
        });
      }
      return { error: "error" };
    }
  }
}

module.exports = new addressController();
