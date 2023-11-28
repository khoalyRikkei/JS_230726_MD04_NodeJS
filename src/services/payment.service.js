const paymentRepository = require("../repositories/payment.repository");

const getAllPayments = async () => {
  return await paymentRepository.getAllPayments();
};

const getPaymentById = async (payId) => {
  return await paymentRepository.getPaymentById(payId);
};

const createPayment = async (paymentData) => {
  return await paymentRepository.createPayment(paymentData);
};

const deletePayment = async (payId) => {
  return await paymentRepository.deletePayment(payId);
};

const editPayment = async (payId, updatedData) => {
  return await paymentRepository.editPayment(payId, updatedData);
};

module.exports = {
  getAllPayments,
  getPaymentById,
  createPayment,
  deletePayment,
  editPayment,
};
