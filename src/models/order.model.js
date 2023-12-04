import { DataTypes } from "sequelize";
import { sequelize } from "../configs/dbconfig.js";

const Order = sequelize.define(
  "orders",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: { type: DataTypes.UUID, allowNull: false },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },

    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    delivery_address: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Order;
