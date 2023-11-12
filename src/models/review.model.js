import { DataTypes } from "sequelize";
import { sequelize } from "../configs/dbconfig.js";

const Review = sequelize.define(
  "reviews",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: DataTypes.STRING(50),
    product_id: DataTypes.STRING(50),
    content: DataTypes.STRING(200),
  },
  {
    freezeTableName: true,
    // timestamps: false,
  }
);

(async () => {
  await Review.sync({ alter: true });
})();
export default Review;
