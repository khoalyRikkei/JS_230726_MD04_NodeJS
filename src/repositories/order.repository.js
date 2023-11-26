const OrderDetail = require("../models/order-detail.model");
const Orders = require("../models/orders.model");
const Product = require("../models/product.model");
const { insertDataArr, updateData, getData } = require("../utils/dbMethod");
class OrderRepository {
  async getAllOrders() {
    try {
      const orders = await Orders.findAll({
        include: [
          {
            model: OrderDetail, // Kết hợp với bảng OrderDetail
            attributes: ["name", "image", "total_price", "quantity"],
          },
        ],
        attributes: ["id", "user_id", "status", "created_at"],
      });

      return orders;
    } catch (error) {
      throw error;
    }
  }
  async getAllOrdersByCondition(queryOptions) {
    try {
      const { limit, offset, order, where } = queryOptions;
      const orders = await Orders.findAll({
        include: [
          {
            model: OrderDetail, // Kết hợp với bảng OrderDetail
            attributes: ["name", "image", "total_price", "quantity"],
          },
        ],
        attributes: ["id", "user_id", "status", "created_at"],
        limit,
        offset,
        order,
        where,
      });

      return orders;
    } catch (error) {
      throw error;
    }
  }
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
  async updateProductStock(id, newStock) {
    try {
      const updatedProduct = await Product.update(
        { quantity_stock: newStock },
        { where: { id: id } }
      );

      return updatedProduct;
    } catch (error) {
      throw error;
    }
  }
  updateOrder(id, updateOrder) {}
}

module.exports = new OrderRepository();
