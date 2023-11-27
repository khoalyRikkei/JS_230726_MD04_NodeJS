const cartRepository = require("../repositories/cart.repository");

const getAllCart = async () => {
  return await cartRepository.getAllCart();
};

const getCartById = async (cartId) => {
  return await cartRepository.getCartById(cartId);
};

const createCart = async (cartData) => {
  return await cartRepository.createCart(cartData);
};

const deleteCart = async (cartId) => {
  return await cartRepository.deleteCart(cartId);
};

const editCart = async (cartId, updatedData) => {
  return await cartRepository.editCart(cartId, updatedData);
};

module.exports = { getAllCart, getCartById, createCart, deleteCart, editCart };
