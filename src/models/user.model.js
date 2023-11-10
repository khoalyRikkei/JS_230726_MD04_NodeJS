import { DataTypes } from "sequelize";
import { sequelize } from "../configs/dbconfig.js";

const User = sequelize.define("users", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_name: DataTypes.STRING(20),
  dob: DataTypes.DATE,
  email: DataTypes.STRING(20),
  role: DataTypes.STRING(10),
  phone: DataTypes.STRING(15),
  address: DataTypes.STRING(200),
  password: DataTypes.STRING,
}, {
    freezeTableName: true
});

(async () => {
  await sequelize.sync();
 
})();
export default User;
