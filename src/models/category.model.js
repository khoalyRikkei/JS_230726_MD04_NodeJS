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
    catagory_name: DataTypes.STRING(50),
    description: DataTypes.STRING(200),
    status: DataTypes.BOOLEAN,
  },
  {
    // freezeTableName: true,
    // timestamps: false,
  }
);

(async () => {
  await Category.sync({ alter: true });
})();
export default Category;
