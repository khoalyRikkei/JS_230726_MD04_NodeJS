const productRepository = require("../repositories/product.repository");
const { BadRequestException } = require("../expeiptions");

class ProductService {
  async getAllProduct(model) {
    try {
      const queryOptions = {
        offset: 0,
        order: [],
        where: {},
      };
      if (model.limit > 0) {
        queryOptions.limit = model.limit;
        queryOptions.offset = (model.page - 1) * model.limit;
      }
      if (model.sort && (model.sort === "product_name" || model.sort === "price")) {
        if (model.sort === "product_name") {
          queryOptions.order.push(["product_name", model.order === "DESC" ? "DESC" : "ASC"]);
        }
        if (model.sort === "price") {
          queryOptions.order.push(["price", model.order === "DESC" ? "DESC" : "ASC"]);
        }
      }

      if (model.name) {
        queryOptions.where.product_name = model.name;
      }
      if (model.category) {
        queryOptions.where.category_id = model.category;
      }

      let products;
      if (
        model.page !== 1 ||
        model.limit !== 0 ||
        Object.keys(queryOptions.where).length > 0 ||
        queryOptions.order.length > 0
      ) {
        products = await productRepository.getAllProductByCondition(queryOptions);
      } else {
        products = await productRepository.getAllProduct();
      }
      const totalProducts = await productRepository.getAllProduct();
      const results = {
        products: products,
        totalProduct: totalProducts.length,
      };
      return results;
    } catch (error) {
      throw error;
    }
  }
  async getProductById(id) {
    const product = await productRepository.getProductById(id);
    if (product == null) throw new BadRequestException("Product not found");
    return product;
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

      if (responseUpdateProduct == null) throw new BadRequestException("Product not found");

      await productRepository.deleteImage(responseUpdateProduct.dataValues.id);

      const inputImages = [...model.images];

      const transformedImages = inputImages.map((image) => ({
        image_url: image.url,
        product_id: responseUpdateProduct.dataValues.id,
        public_id: image.id,
        deleteAt: null,
      }));
      await productRepository.insertImageProduct(transformedImages);

      return responseUpdateProduct;
    } catch (error) {
      throw error;
    }
  }
  async deleteProduct(model) {
    try {
      const deleteProduct = await productRepository.deleteProduct(model.id);
      if (deleteProduct == null) throw new BadRequestException("Product not found");
      return {};
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductService();
