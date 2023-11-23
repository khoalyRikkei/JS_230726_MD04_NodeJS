const productRepository = require("../repositories/product.repository");

const getProducts = async () => {
  return await productRepository.getProducts();
};
const getProductById = async (productId) => {
  const data = await productRepository.getProductById(productId);
  if (data.length > 0) {
    return data[0];
  }
};

const createProduct = async () => {
  return await productRepository.createProduct();
};

module.exports = { getProducts, getProductById, createProduct };
