const imageService = require("../services/image.service");

class imageController {
  async createImage(req, res) {
    try {
      const data = req?.files?.map((el) => ({ src: el.path, ...req.body }));
      const response = await imageService.createImage(data);
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
  async getAllImage(req, res) {
    try {
      const response = await imageService.getAllImage();
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
  async getOneImage(req, res) {
    const { id } = req.params;
    try {
      const response = await imageService.getOneImage({ id });
      return res.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
  async updateImage(req, res) {
    try {
      const { id } = req.params;
      const imgSrc = req.file.path;
      console.log(req);
      const response = await imageService.updateImage(id, imgSrc);
      return response.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
  async deleteImage(req, res) {
    try {
      const { id } = req.params;
      const response = await imageService.deleteImage({ id });
      return response.status(200).json(response);
    } catch (error) {
      // return internalServerError(res);
    }
  }
}

module.exports = new imageController();
