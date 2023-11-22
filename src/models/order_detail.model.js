import { DataTypes } from "sequelize";
import { sequelize } from "../configs/dbconfig.js";

const Order_detail = sequelize.define(
  "order_detail",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    product_id: DataTypes.STRING(50),
    quantity: DataTypes.INTEGER,
    size: DataTypes.STRING(10),
    price: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

(async () => {
  await Order_detail.sync({ alter: true });
})();
export default Order_detail;
