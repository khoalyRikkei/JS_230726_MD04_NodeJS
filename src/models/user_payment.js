import { DataTypes } from "sequelize";
import { sequelize } from "../configs/dbconfig.js";

const User_payment = sequelize.define(
  "User_payments",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    order_id: DataTypes.STRING(50),
    payment_type: DataTypes.STRING(200),
  },
  {
    freezeTableName: true,
    // timestamps: false,
  }
);

(async () => {
  await User_payment.sync({ force: true });
})();
export default User_payment;
