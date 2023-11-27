const { insertData, updateData, deleteData } = require("../utils/dbMethod");
const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const imageProduct = require("../models/imageProduct.model");

class CartRepository {
  async getCart(model) {
    try {
      const result = await Cart.findAll({
        include: [
          {
            model: Product,
            attributes: ["product_name", "price", "id"],
            include: [
              {
                model: imageProduct,
                attributes: ["image_url"], // Thay "image_url" bằng các thuộc tính hình ảnh bạn muốn lấy
              },
            ],
          },
        ],
        where: {
          user_id: model.user_id,
        },
        attributes: ["id", "quantity"],
      });

      return result;
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
  async updateCart(model) {
    try {
      return await updateData(model.cart_id, model.updateCart, Cart);
    } catch (error) {
      throw error;
    }
  }
  async deleteCartItem(model) {
    try {
      return await deleteData(model.cart_id, Cart);
    } catch (error) {
      throw error;
    }
  }
  async deleteAllCart(model) {
    try {
      const rowsDeleted = await Cart.destroy({
        where: {
          user_id: model.user_id,
        },
      });

      if (rowsDeleted === 0) {
        throw new Error("Delete all cart items failed");
      }

      return rowsDeleted;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = new CartRepository();
