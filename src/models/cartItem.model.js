// import { DataTypes } from "sequelize";
// import { sequelize } from "../configs/dbconfig.js";

// const CartItem = sequelize.define(
//   "cartItem",
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//     },
//     cart_id: {
//       type: DataTypes.UUID,
//       allowNull: false,
//     },
//     product_id: {
//       type: DataTypes.UUID,
//       allowNull: false,
//     },
//     quantity: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     size: DataTypes.STRING(10),
//   },
//   {
//     freezeTableName: true,
//     timestamps: false,
//   }
// );

// (async () => {
//   await CartItem.sync({ alter: true });
// })();
// export default CartItem;
