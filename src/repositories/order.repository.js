const OrderDetail = require("../models/order-detail.model");
const Orders = require("../models/orders.model");
const Product = require("../models/product.model");
const ShippingAddress = require("../models/shippingAddress.model");
const { insertDataArr, insertData } = require("../utils/dbMethod");
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
  getProductByFK(id) {
    return Product.findByPk(id);
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
      return insertData(newOrder, Orders);
    } catch (error) {
      throw error;
    }
  }
  insertShippingAddress(newAddress) {
    try {
      return insertData(newAddress, ShippingAddress);
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
  async updateOrder(id, updateData) {
    try {
      const instance = await Orders.findOne({ where: { id: id } });

      if (!instance) {
        throw new Error(`${Orders.name} not found`);
      }
      await instance.update(updateData);
      return instance;
    } catch (error) {
      throw error;
    }
  }
  async updateShippingAddress(orderId, newShippingAddressId) {
    try {
      const order = await Orders.findByPk(orderId);

      if (!order) {
        throw new Error(`Order with ID ${orderId} not found`);
      }

      order.shipping_address_id = newShippingAddressId;
      await order.save();

      console.log(`Shipping address updated for Order ID ${orderId}`);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new OrderRepository();
