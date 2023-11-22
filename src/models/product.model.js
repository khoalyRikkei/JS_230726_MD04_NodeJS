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
    product_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    describes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
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
