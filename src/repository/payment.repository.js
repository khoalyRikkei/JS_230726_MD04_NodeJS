import { getData, insertData, deleteData, editData, getDataById} from "../../utils/data.util.js";
import Payment from "../models/payment.mode.js";

export default class PaymentRepository {
    async getPayment() {
      try {
        const paymentData = await getData(Payment);
        return paymentData;
      } catch (error) {
        throw error;
      }
    }
    async getPaymentById(id) {
      try {
        const paymentById = await getDataById(Payment, id);
        return paymentById;
      } catch (error) {
        throw error;
      }
    }
    async createPayment(data) {
      try {
        const newPayment = await insertData(Payment, data);
        return newPayment;
      } catch (error) {
        throw error;
      }
    }
  
    async deletePayment(id) {
      try {
        const deletePayment = await deleteData(Payment, id);
        return deletePayment;
      } catch (error) {
        throw error;
      }
    }
    async editPayment(id, item) {
     try {
      const editPayment = await editData(Payment, id, item);
      return editPayment;
     } catch (error) {
      throw error;
     }
    }
  }