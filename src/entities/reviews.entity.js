const sequelize = require("../configs/db.config");
const { DataTypes } = require("sequelize");
const User = require("./users.entity");
const Product = require("./products.entity");
const Review = sequelize.define(
  "Review",
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
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
    },
  },
  { timestamps: true }
);
Review.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasOne(Review, { foreignKey: "userId" });
Review.belongsTo(Product, {
  foreignKey: "productId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Product.hasMany(Review, { foreignKey: "productId" });
module.exports = Review;
