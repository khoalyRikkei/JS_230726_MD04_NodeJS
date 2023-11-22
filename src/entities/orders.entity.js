const sequelize = require("../configs/db.config");
const { DataTypes } = require("sequelize");
const Address = require("./address.entity");
const Payment = require("./payments.entity");

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paymentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    codeOrder: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    shippingFee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 25000,
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

Order.belongsTo(Address, {
  foreignKey: "addressId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Address.hasMany(Order, { foreignKey: "addressId" });
Order.belongsTo(Payment, {
  foreignKey: "paymentId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Payment.hasMany(Order, { foreignKey: "paymentId" });

module.exports = Order;
