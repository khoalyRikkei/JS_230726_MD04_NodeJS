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
    status: DataTypes.BOOLEAN,
    note: DataTypes.STRING(200),
  },
  {
    freezeTableName: true,
  }
);
// User.hasMany(Order, {
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
//   foreignKey: "user_id",
// });
// Order.belongsTo(User, {
//   foreignKey: "user_id",
// });

(async () => {
  await Order.sync({ alter: true });
})();
export default Order;
