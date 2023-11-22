import { DataTypes } from "sequelize";
import { sequelize } from "../configs/dbconfig.js";
const Product_inventory = sequelize.define(
  "product_inventories",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: DataTypes.STRING(50),
    product_id: DataTypes.STRING(50),
    quantity: DataTypes.INTEGER,
    size: DataTypes.STRING(10),
  },
  {
    freezeTableName: true,
    // timestamps: false,
  }
);

(async () => {
  await Product_inventory.sync({ alter: true });
})();
export default Product_inventory;
