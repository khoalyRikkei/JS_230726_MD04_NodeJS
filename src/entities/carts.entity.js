const sequelize = require("../configs/db.config");
const { DataTypes } = require("sequelize");
const Product = require("./products.entity");
const User = require("./users.entity");
const Cart = sequelize.define(
  "Cart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
  },
  {
    timestamps: true,
  }
);
Cart.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasOne(Cart, { foreignKey: "userId" });
Cart.belongsTo(Product, {
  foreignKey: "productId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Product.hasMany(Cart, { foreignKey: "productId" });
module.exports = Cart;
