const paymentService = require("../services/payment.service");

const getAllPayments = async (req, res) => {
  try {
    const payments = await paymentService.getAllPayments();
    res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const payId = req.params.id;
    const payment = await paymentService.getPaymentById(payId);

    if (!payment || payment.length === 0) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.status(200).json(payment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createPayment = async (req, res) => {
  try {
    const newPayId = await paymentService.createPayment(req.body);
    res
      .status(201)
      .json({ id: newPayId, message: "Payment created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deletePayment = async (req, res) => {
  try {
    const payId = req.params.id;
    const result = await paymentService.deletePayment(payId);

    if (result) {
      res.status(200).json({ message: "Payment deleted successfully" });
    } else {
      res.status(404).json({ message: "Payment not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const editPayment = async (req, res) => {
  try {
    const payId = req.params.id;
    const updatedData = req.body;
    const result = await paymentService.editPayment(payId, updatedData);

    if (result) {
      res.status(200).json({ message: "Payment updated successfully" });
    } else {
      res.status(404).json({ message: "Payment not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllPayments,
  getPaymentById,
  createPayment,
  deletePayment,
  editPayment,
};
