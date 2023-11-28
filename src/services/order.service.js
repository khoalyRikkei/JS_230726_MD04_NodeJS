const orderRepository = require("../repositories/order.repository");

const getAllOrders = async () => {
  return await orderRepository.getAllOrders();
};

const getOrderById = async (orderId) => {
  return await orderRepository.getOrderById(orderId);
};

const createOrder = async (orderData) => {
  // tinh tong tu du lieu
  //--> orderData --> id
  // tao orderItem tu id ddos
  try {
    const ret = await orderRepository.createOrder(orderData);

    console.log(ret);
    return ret;
  } catch (error) {
    throw error;
  }
};

const deleteOrder = async (orderId) => {
  return await orderRepository.deleteOrder(orderId);
};

const editOrder = async (orderId, updatedData) => {
  return await orderRepository.editOrder(orderId, updatedData);
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  deleteOrder,
  editOrder,
};
