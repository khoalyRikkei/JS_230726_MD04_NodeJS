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
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // total: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
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
