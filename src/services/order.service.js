const orderRepository = require("../repositories/order.repository");

const getAllOrders = async () => {
  return await orderRepository.getAllOrders();
};

const getOrderById = async (orderId) => {
  return await orderRepository.getOrderById(orderId);
};

const createOrder = async (orderData) => {
  console.log(999, orderData);
  try {
    const ret = await orderRepository.createOrder(orderData);

    console.log(ret);
    return ret;
  } catch (error) {
    throw error;
  }
};
const order = {
  userId: req.userId,
  createAt: new Date().toISOString(),
  total: 2000,
  status: "pending",
};
const orderItem = cart.map((item) => ({ ...item, orderId: "" }));

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
