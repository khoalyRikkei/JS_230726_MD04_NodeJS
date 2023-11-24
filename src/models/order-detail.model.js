const { DataTypes } = require("sequelize");
const sequelize = require("../configs/configDB");

const OrderDetail = sequelize.define(
  "orderDetail",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.INTEGER, allowNull: false },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = OrderDetail;
