const OrderDetail = require("../models/order-detail.model");
const Orders = require("../models/orders.model");
const Product = require("../models/product.model");
const { insertDataArr } = require("../utils/dbMethod");
class OrderRepository {
  getAllOrder() {}
  async getOrderById(id) {
    try {
      const fetchedRecords = await Orders.findAll({
        where: {
          user_id: id,
          deletedAt: null,
        },
        raw: true,
      });
      return fetchedRecords;
    } catch (error) {
      throw error;
    }
  }
  async getProductByFK(id) {
    return await Product.findByPk(id);
  }
  insertOrderDetail(newOrderDetails) {
    try {
      return insertDataArr(newOrderDetails, OrderDetail);
    } catch (error) {
      throw error;
    }
  }
  insertOrders(newOrder) {
    try {
      return insertDataArr(newOrder, Orders);
    } catch (error) {
      throw error;
    }
  }
  updateOrder(id, updateOrder) {}
}

module.exports = new OrderRepository();
