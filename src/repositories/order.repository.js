const OrderItem = require("../entities/orderItems.entity");
const Order = require("../entities/orders.entity");
const Product = require("../entities/products.entity");
const User = require("../entities/users.entity");

class orderRepository {
  async createOrder(body) {
    console.log("hahahha", body);
    const data = await Order.findOrCreate({
      where: {
        codeOrder: body.codeOrder,
      },
      defaults: {
        userId: body.userId,
        addressId: body.addressId,
        paymentId: body.paymentId,
        status: body.status,
        totalAmount: body.totalAmount,
        shippingFee: body.shippingFee,
        orderDate: body.orderDate,
      },
    });
    return data;
  }
  async getAllOrder() {
    const data = await Order.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "userId"],
          },
        },
        {
          model: OrderItem,
          as: "orderItem",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          include: [
            {
              model: Product,
              as: "product",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
        },
      ],
    });
    console.log(data);
    return data;
  }
}

module.exports = new orderRepository();
