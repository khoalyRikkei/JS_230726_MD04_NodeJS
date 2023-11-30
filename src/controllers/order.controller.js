const orderService = require("../services/order.service");

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await orderService.getOrderById(orderId);

    if (!order || order.length === 0) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createOrder = async (req, res) => {
  try {
    console.log(1111, req.body);
    const newOrderId = await orderService.createOrder(req.body, req.userId);
    // res
    //   .status(201)
    //   .json({ id: newOrderId, message: "Order created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const result = await orderService.deleteOrder(orderId);

    if (result) {
      res.status(200).json({ message: "Order deleted successfully" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const editOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const updatedData = req.body;

    // trong order phai co

    // danh sach cart,
    // ngwoif nhaanj
    // userId

    const result = await orderService.editOrder(orderId, updatedData);

    if (result) {
      res.status(200).json({ message: "Order updated successfully" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  deleteOrder,
  editOrder,
};
