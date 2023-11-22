const sequelize = require("../configs/db.config");
const { DataTypes } = require("sequelize");
const Category = require("./categories.entity");
const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 200,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);
Product.belongsTo(Category, {
  foreignKey: "categoryId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Category.hasMany(Product, { foreignKey: "categoryId" });
module.exports = Product;
