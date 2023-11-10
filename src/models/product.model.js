import { DataTypes } from "sequelize";
import { sequelize } from "../configs/dbconfig.js";

const Product = sequelize.define("products", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  product_name: DataTypes.STRING(45),
  product_price: DataTypes.INTEGER,
  product_img: DataTypes.STRING,
  describes: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
  category_name: DataTypes.STRING(45),
  size: DataTypes.STRING(10),
});

// (async () => {
//   await sequelize.sync({ force: true });
// })();
Product.sync({ force: true });
export default Product;
