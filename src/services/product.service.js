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
const getProductByName = async (productName) => {
  return await productRepository.getProductByName(productName);
};

const createProduct = async (productData) => {
  return await productRepository.createProduct(productData);
};

const deleteProduct = async (productId) => {
  return await productRepository.deleteProduct(productId);
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  getProductByName,
};
