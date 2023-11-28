const { DataTypes } = require("sequelize");
const sequelize = require("../configs/configDB");

const Orders = sequelize.define(
  "oders",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    user_id: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.INTEGER, allowNull: false },

    created_at: { type: DataTypes.DATE, allowNull: false },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = Orders;
