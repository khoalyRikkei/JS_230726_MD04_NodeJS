import { DataTypes } from "sequelize";
import { sequelize } from "../configs/dbconfig.js";
import User from "./user.model.js";

const Order = sequelize.define(
  "orders",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);


(async () => {
  await Order.sync({ alter: true });
})();
export default Order;