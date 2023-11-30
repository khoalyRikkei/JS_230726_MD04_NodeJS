const { insertData, updateData, deleteData } = require("../utils/dbMethod");
const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const imageProduct = require("../models/imageProduct.model");

class CartRepository {
  async getCart(user_id) {
    try {
      const result = await Cart.findAll({
        include: [
          {
            model: Product,
            attributes: ["product_name", "price", "id"],
            include: [
              {
                model: imageProduct,
                attributes: ["image_url"],
                subQuery: false,
                limit: 1,
              },
            ],
          },
        ],
        where: {
          user_id: user_id,
        },
        attributes: ["id", "quantity"],
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
  async getCartArr(user_id) {
    try {
      const result = await Cart.findAll({
        include: [
          {
            model: Product,
            attributes: ["product_name", "price", "id"],
            include: [
              {
                model: imageProduct,
                attributes: ["image_url"],
                subQuery: false,
                limit: 1,
              },
            ],
          },
        ],
        where: {
          user_id: user_id,
        },
        attributes: ["id", "quantity"],
      });
      // Chuyển đổi cấu trúc dữ liệu trả về từ product thành cart
      const cart = result.map((cartItem) => {
        const product = cartItem.product;
        return {
          id: cartItem.id,
          quantity: cartItem.quantity,
          product_id: product.id,
          product_name: product.product_name,
          price: product.price,
          image_url: product.imageProducts[0].image_url,
        };
      });

      return cart;
    } catch (error) {
      throw error;
    }
  }
  //check product trong cart
  async cartProductCheck(user_id, product_id) {
    try {
      const result = await Cart.findOne({
        where: {
          user_id: user_id,
          product_id: product_id,
        },
        raw: true,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  //update product trong cart
  async cartProductUpdate(cart_id, newQuantity) {
    try {
      const updateProduct = await Cart.update(
        {
          quantity: newQuantity,
        },
        {
          where: {
            id: cart_id,
          },
        }
      );

      return updateProduct;
    } catch (error) {
      throw error;
    }
  }
  async createCart(model) {
    try {
      return await insertData(model, Cart);
    } catch (error) {
      throw error;
    }
  }
  async updateCart(cart_id, updateCart) {
    try {
      return await updateData(cart_id, updateCart, Cart);
    } catch (error) {
      throw error;
    }
  }
  async deleteCartItem(cart_id) {
    try {
      return await deleteData(cart_id, Cart);
    } catch (error) {
      throw error;
    }
  }
  async deleteAllCart(user_id) {
    try {
      const rowsDeleted = await Cart.destroy({
        where: {
          user_id: user_id,
        },
      });

      if (rowsDeleted === 0) {
        throw new Error("Delete all cart items failed");
      }

      return rowsDeleted;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new CartRepository();
