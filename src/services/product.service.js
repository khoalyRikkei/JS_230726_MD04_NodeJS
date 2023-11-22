const productRepository = require("../repositories/product.repository");

class productService {
  async getAllProduct() {
    try {
      const response = await productRepository.getAllProduct();
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return error;
    }
  }
  async createProduct(body) {
    try {
      const response = await productRepository.createProduct(body);
      return {
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Create Product successfully"
            : "Product is available",
      };
    } catch (error) {
      return error;
    }
  }
  async getOneProduct({ id }) {
    try {
      const response = await productRepository.getOneProduct({ id });
      if (response?.dataValues !== undefined) {
        return {
          success: true,
          data: response?.dataValues,
        };
      } else {
        return {
          success: false,
          message: "Product not found",
        };
      }
    } catch (error) {
      return error;
    }
  }
  async updateProduct(id, body) {
    try {
      const response = await productRepository.updateProduct(id, body);
      if (response[0] === 0) {
        return {
          success: false,
          message: `Product not found`,
        };
      } else {
        return {
          success: true,
          message: `Product updated successfully`,
        };
      }
    } catch (error) {
      return error;
    }
  }
  async deleteProduct({ id }) {
    try {
      const response = await productRepository.deleteProduct({ id });
      if (response === 0) {
        return {
          success: false,
          message: `Product not found`,
        };
      }
      return {
        data: response,
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = new productService();
