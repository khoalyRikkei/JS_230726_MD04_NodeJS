const sequelize = require("../configs/db.config");
const { DataTypes } = require("sequelize");
const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
});
module.exports = Category;
