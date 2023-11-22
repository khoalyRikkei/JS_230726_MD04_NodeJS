const Cart = require("../entities/carts.entity");
const Product = require("../entities/products.entity");

class cartRepository {
  async getAllCart() {
    return Cart.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
  }
  async createCart(body) {
    const existItem = await Cart.findOne({
      where: {
        userId: body.userId,
      },
    });

    if (existItem) {
      const newCart = await Cart.update(
        {
          quantity: existItem.quantity + +body.quantity,
        },
        {
          where: {
            userId: body.userId,
          },
        }
      );
      return {
        message: "The product is already in the cart ",
        newCart: newCart,
      };
    } else {
      const newCart = await Cart.create({
        userId: body.userId,
        quantity: +body.quantity,
      });
      return {
        message: "The product is added in the cart",
        newCart: newCart,
      };
    }
  }
  async getCartByUser({ id }) {
    console.log("sdfsdf", id);
    return await Cart.findAll({
      where: { userId: id },
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
          include: [
            {
              model: Image,
              as: "image",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
        },
      ],
    });
  }
  async deleteCart(id) {
    return await Cart.destroy({
      where: { id: id },
    });
  }
}

module.exports = new cartRepository();
