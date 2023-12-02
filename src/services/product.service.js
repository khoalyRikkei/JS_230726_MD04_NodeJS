const moment = require("moment");

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
  console.log(777, productData);

  return await productRepository.createProduct(productData);
};

const deleteProduct = async (productId) => {
  return await productRepository.deleteProduct(productId);
};

const editProduct = async (productId, updatedData) => {
  updatedData.createAt = moment(updatedData.createAt).format("YYYY-MM-DD");
  updatedData.updateAt = moment(updatedData.updateAt).format("YYYY-MM-DD");

  return await productRepository.editProduct(productId, updatedData);
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  getProductByName,
  editProduct,
};
