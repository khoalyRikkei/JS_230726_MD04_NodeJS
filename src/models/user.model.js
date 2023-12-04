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
      type: DataTypes.STRING(45),
      allowNull: false,
    },
   
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    status:{
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    // timestamps: false,
  }
);

// (async () => {
//   await User.sync({ alter: true });
// })();
export default User;
