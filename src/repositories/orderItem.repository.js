const Cart = require("../entities/carts.entity");
const OrderItem = require("../entities/orderItems.entity");

class orderItemRepository {
  async createOrderItem(userId) {
    console.log(userId);
    const cartItem = await Cart.findAll({
      where: { userId: userId.id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (!cartItem) {
      return { message: "Item not found in cart" };
    }
    console.log(cartItem);
    const min = 100000000;
    const max = 999999999;
    const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;
    const createOrder = cartItem.map((item) => ({
      codeOrderItem: randomCode,
      quantity: item.quantity,
      userId: item.userId,
    }));
    const newOrderItem = await OrderItem.bulkCreate(createOrder);
    return newOrderItem;
  }
  async getOrderItemByUser(id) {
    const data = await OrderItem.findAll({
      where: { userId: id },
      attributes: {
        exclude: ["createdAt", "updatedAt", "productId"],
      },
    });
    return data;
  }
  async getAllOrderItem() {
    const data = await OrderItem.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return data;
  }
}

module.exports = new orderItemRepository();
