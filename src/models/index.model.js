import { sequelize } from "../configs/dbconfig.js";
import Cart from "./carts.model.js";
import Product from "./product.model.js";

export default function foreignKey() {
  Product.hasMany(Cart, {
    foreignKey: "product_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Cart.belongsTo(Product, {
    foreignKey: "product_id",
  });



  (async () => {
    await sequelize.sync({ alter: true });
  })();
}
