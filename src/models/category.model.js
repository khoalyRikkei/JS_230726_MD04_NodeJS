const sequelize = require("../configs/configDB");
const { DataTypes } = require("sequelize");

const Category = sequelize.define(
  "category",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: { type: DataTypes.TEXT, allowNull: false },
    status: { type: DataTypes.BOOLEAN, allowNull: false },

    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = Category;
