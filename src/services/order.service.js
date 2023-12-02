const orderRepository = require("../repositories/order.repository");
const moment = require("moment");

const getAllOrders = async () => {
  return await orderRepository.getAllOrders();
};

const getOrderById = async (orderId) => {
  return await orderRepository.getOrderById(orderId);
};

const createOrder = async (products, userId) => {
  const total = products.reduce(
    (pre, item) =>
      pre + Number(item.productPrice) * Number(item.productQuantity),
    0
  );
  const order = {
    userId: userId,
    createAt: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
    total: total,
    status: "pending",
  };
  console.log(1111111, order);

  try {
    const ret = await orderRepository.createOrder(order);

    console.log(ret);

    const orderItem = {
      userId: userId,
      orderId: 5,
      productId: 1,
      productQuantity: 3,
      price: total,
      size: 7,
    };
    console.log(1234, orderItem);

    return ret;
  } catch (error) {
    throw error;
  }
};

// const orderItem = cart.map((item) => ({ ...item, orderId: "" }));

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
