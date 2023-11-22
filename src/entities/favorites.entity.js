const sequelize = require("../configs/db.config");
const { DataTypes } = require("sequelize");
const Product = require("./products.entity");
const User = require("./users.entity");
const Favorite = sequelize.define(
  "Favorite",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
Favorite.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasMany(Favorite, { foreignKey: "userId" });
Favorite.belongsTo(Product, {
  foreignKey: "productId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Product.hasMany(Favorite, { foreignKey: "productId" });
module.exports = Favorite;
