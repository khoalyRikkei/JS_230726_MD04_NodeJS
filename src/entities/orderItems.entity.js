const sequelize = require("../configs/db.config");
const { DataTypes } = require("sequelize");
const Order = require("./orders.entity");
const Product = require("./products.entity");
const Cart = require("./carts.entity");
const OrderItem = sequelize.define(
  "OrderItem",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codeOrderItem: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // price: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // productName: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    // productThumbnail: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // }
  },
  {
    timestamps: false,
  }
);

OrderItem.belongsTo(Order, {
  foreignKey: "orderId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Order.hasMany(OrderItem, { foreignKey: "orderId" });
OrderItem.belongsTo(Cart, {
  foreignKey: "cartId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Cart.hasMany(OrderItem, { foreignKey: "cartId" });
Product.hasMany(OrderItem, {
  foreignKey: "productId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
OrderItem.belongsTo(Product, { foreignKey: "productId" });
module.exports = OrderItem;
