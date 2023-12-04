import { DataTypes } from "sequelize";
import { sequelize } from "../configs/dbconfig.js";

const Category = sequelize.define(
  "categories",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    category_name: DataTypes.STRING(50),
    description: DataTypes.STRING(200),
    status: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
    
  }
);


export default Category;
