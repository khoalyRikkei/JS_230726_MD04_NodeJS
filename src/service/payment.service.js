import PaymentRepository from "../repository/payment.repository.js";
const paymentRepository = new PaymentRepository();

export default class PaymentService {
  async getPayment() {
    try {
      const data = await paymentRepository.getPayment();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getPaymentById(id) {
    try {
      const paymentById = await paymentRepository.getPaymentById(id);
      return paymentById;
    } catch (error) {
      throw error;
    }
  }

  async createPayment(item) {
    try {
      const data = await paymentRepository.createPayment(item);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deletePayment(id) {
    try {
      const data = await paymentRepository.deletePayment(id);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async editPayment(id, item) {
    try {
      const data = await paymentRepository.editPayment(id, item);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
