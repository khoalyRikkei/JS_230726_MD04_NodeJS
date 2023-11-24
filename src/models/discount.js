const { DataTypes } = require("sequelize");
const sequelize = require("../configs/configDB");

const Discount = sequelize.define(
  "discount",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discount_percent: { type: DataTypes.INTEGER, allowNull: false },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expired_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Discount;
