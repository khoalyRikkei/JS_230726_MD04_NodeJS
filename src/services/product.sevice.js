const productRepository = require("../repositories/product.repository");
const { BadRequestException } = require("../expeiptions");

class ProductService {
  getAllProduct(filterConditions, order, limitProduct) {
    if (filterConditions) {
      return productRepository.getAllProductByCondition(
        filterConditions,
        order,
        limitProduct.limit,
        limitProduct.offset
      );
    }
    return productRepository.getAllProduct();
  }
  getProductById(id) {
    return productRepository.getProductById(id);
  }
  async createProduct(model) {
    try {
      const insertProduct = await productRepository.createProduct(model.newProduct);

      const inputImages = model.images;

      const transformedImages = inputImages.map((image) => ({
        image_url: image.url,
        product_id: insertProduct.dataValues.id,
        public_id: image.id,
        deleteAt: null,
      }));
      const insertImages = await productRepository.insertImageProduct(transformedImages);
      if (!insertImages) {
        throw new BadRequestException("Insert failed");
      }
      return insertProduct;
    } catch (error) {
      throw error;
    }
  }
  async updateProduct(model) {
    try {
      const responseUpdateProduct = await productRepository.updateProduct(
        model.id,
        model.updateProduct
      );

      if (responseUpdateProduct) {
        const responseDeleteImage = await productRepository.deleteImage(
          responseUpdateProduct.dataValues.id
        );
      }

      const inputImages = [...model.images];

      const transformedImages = inputImages.map((image) => ({
        image_url: image.url,
        product_id: responseUpdateProduct.dataValues.id,
        public_id: image.id,
        deleteAt: null,
      }));
      const insertImages = await productRepository.insertImageProduct(transformedImages);

      return responseUpdateProduct;
    } catch (error) {
      throw error;
    }
  }
  async deleteProduct(model) {
    try {
      return await productRepository.deleteProduct(model.id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductService();
