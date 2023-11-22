const imageRepository = require("../repositories/image.repository");

class imageService {
  async createImage(body) {
    try {
      let hasSuccess = false;
      for (const image of body) {
        try {
          const response = await imageRepository.createImage(image);
          const success = response[1] === true ? true : false;
          if (success) {
            hasSuccess = true;
          }
        } catch (error) {
          throw error;
        }
      }
      if (hasSuccess) {
        return {
          success: true,
          message: "Created image successfully",
        };
      } else {
        return {
          success: false,
          message: "Image is not available",
        };
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getAllImage() {
    try {
      const response = await imageRepository.getAllImage();
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return error;
    }
  }
  async getOneImage({ id }) {
    try {
      const response = await imageRepository.getOneImage({ id });
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return error;
    }
  }
  async updateImage(id, body) {
    try {
      const response = await imageRepository.updateImage(id, body);
      return {
        success: response > 0 ? true : false,
        message:
          response > 0 ? "Image updated successfully" : "Image update fail",
      };
    } catch (error) {
      return error;
    }
  }
  async deleteImage({ id }) {
    try {
      const response = await imageRepository.deleteImage({ id });
      return {
        success: response > 0 ? true : false,
        message: "Delete image successfully",
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = new imageService();
