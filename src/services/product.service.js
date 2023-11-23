const productRepository = require("../repositories/product.repository");

const getProducts = async () => {
  return await productRepository.getProducts();
};
const getProductById = async (productId) => {
  return await productRepository.getProductById(productId);
};
module.exports = { getProducts };
