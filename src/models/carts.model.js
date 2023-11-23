import { DataTypes } from "sequelize";
import { sequelize } from "../configs/dbconfig.js";

const Cart = sequelize.define(
  "carts",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    // timestamps: false,
  }
);

(async () => {
  await Cart.sync({ alter: true });
})();
export default Cart;
