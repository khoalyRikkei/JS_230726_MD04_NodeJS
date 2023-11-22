const Image = require("../entities/images.entity");

class imageRepository {
  async createImage(image) {
    try {
      const response = await Image.findOrCreate({
        where: { src: image.src },
        defaults: { src: image.src, productId: +image.productId },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async getAllImage() {
    try {
      const response = await Image.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async getOneImage({ id }) {
    try {
      const response = await Image.findOne({
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
  async updateImage(id, body) {
    try {
      const response = await Image.update({ imgSrc: body }, { where: { id } });
      return response;
    } catch (error) {
      return error;
    }
  }
  async deleteImage({ id }) {
    try {
      const response = await Image.destroy({
        where: { id },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new imageRepository();
