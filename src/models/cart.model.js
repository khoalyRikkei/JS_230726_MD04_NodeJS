import { DataTypes } from "sequelize";
import { sequelize } from "../configs/dbconfig.js";
import Product from "./product.model.js";
import User from "./user.model.js";

const Cart = sequelize.define(
  "carts",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: DataTypes.STRING(10),
  },
  {
    freezeTableName: true,
    // timestamps: false,
  }
);
Product.hasMany(Cart, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: "product_id",
});
Cart.belongsTo(Product, {
  foreignKey: "product_id",
});
// User.hasMany(Cart, {
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
//   foreignKey: "user_id",
// });
// Cart.belongsTo(User, {
//   foreignKey: "user_id",
// });
(async () => {
  await Cart.sync({ alter: true });
})();
export default Cart;
