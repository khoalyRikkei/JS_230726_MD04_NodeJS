import { DataTypes } from "sequelize";
import { sequelize } from "../configs/dbconfig.js";

const Product = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    product_price: DataTypes.INTEGER,
    product_img: DataTypes.STRING,
    describes: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    category_name: DataTypes.STRING(45),
    size: DataTypes.STRING(10),
  },
  {
    freezeTableName: true,
    // timestamps: false,
  }
);

(async () => {
  await Product.sync({ alter: true });
})();

export default Product;