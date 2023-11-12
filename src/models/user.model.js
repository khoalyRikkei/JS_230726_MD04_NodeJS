import { DataTypes } from "sequelize";
import { sequelize } from "../configs/dbconfig.js";

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: DataTypes.STRING(20),
    role: DataTypes.STRING(10),
    phone: DataTypes.STRING(15),
    address: DataTypes.STRING(200),
    password: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    // timestamps: false,
    
  }
);

(async () => {
  await User.sync({ alter: true });
})();
export default User;
