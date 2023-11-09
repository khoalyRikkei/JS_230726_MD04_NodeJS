import { DataTypes } from "sequelize";
import sequelize from "../database/sequelize.config.js";

export const Category = sequelize.define("categorys", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false, // Đảm bảo trường không được null
    unique: true, // Đảm bảo giá trị của trường là duy nhất trong bảng
  },
  description: DataTypes.STRING(2000),
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, );

(async () => {
    await sequelize.sync();
    console.log('Category model synced with the database.');
  })()


  