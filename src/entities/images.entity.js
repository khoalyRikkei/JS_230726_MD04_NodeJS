const sequelize = require("../configs/db.config");
const { DataTypes } = require("sequelize");
const Product = require("./products.entity");
const Image = sequelize.define("Image", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },

  imgSrc: {
    type: DataTypes.TEXT,
  },
});
Image.belongsTo(Product, {
  foreignKey: "productId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Product.hasMany(Image, { foreignKey: "productId" });
module.exports = Image;
