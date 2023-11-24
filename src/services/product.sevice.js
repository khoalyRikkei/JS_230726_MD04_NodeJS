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
        imageUrl: image.url,
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
      // const images = [
      //   {
      //     id: "dlpd3xmvpnwrhjxdhukt",
      //     url: "http://res.cloudinary.com/dsq0mydrb/image/upload/v1700717051/dlpd3xmvpnwrhjxdhukt.jpg",
      //   },
      //   {
      //     id: "adss3r2e3sg8kt6hn4dl",
      //     url: "http://res.cloudinary.com/dsq0mydrb/image/upload/v1700717051/adss3r2e3sg8kt6hn4dl.jpg",
      //   },
      //   {
      //     id: "ippf7o5pwbvc2e66ajlf",
      //     url: "http://res.cloudinary.com/dsq0mydrb/image/upload/v1700717051/ippf7o5pwbvc2e66ajlf.jpg",
      //   },
      //   {
      //     id: "xldmwyjbadtgeytpotgy",
      //     url: "http://res.cloudinary.com/dsq0mydrb/image/upload/v1700717051/xldmwyjbadtgeytpotgy.jpg",
      //   },
      // ];
      const inputImages = [...model.images];

      const transformedImages = inputImages.map((image) => ({
        imageUrl: image.url,
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
