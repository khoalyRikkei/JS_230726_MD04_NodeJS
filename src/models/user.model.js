import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../configs/dbConfig.js";

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
      primaryKey: true,
    },
    username: DataTypes.STRING,
    doB: DataTypes.DATE,
    gender: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    email: DataTypes.STRING(20),
    address: DataTypes.STRING,
  },
  {
    freezeTableName: true, // Giữ tên bảng không thay đổi
  }
);

(async () => {
  await sequelize.sync();
  // Code here
})();
export default User;
