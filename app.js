require("dotenv").config();
const express = require("express");
const Router = require("./src/routers/index");
const sequelize = require("./src/configs/db.config");
const bodyParser = require("body-parser");
const cors = require("cors");
// const Favorite = require("./src/entities/favorites.entity");
// const Role = require("./src/entities/roles.entity");
// const User = require("./src/entities/users.entity");
// const Address = require("./src/entities/address.entity");
// const Category = require("./src/entities/categories.entity");
// const Product = require("./src/entities/products.entity");
// const Image = require("./src/entities/images.entity");
// const Cart = require("./src/entities/carts.entity");
// const Payment = require("./src/entities/payments.entity");
// const Order = require("./src/entities/orders.entity");
// const OrderItem = require("./src/entities/orderItems.entity");
const app = express();
const port = process.env.SERVER_PORT;
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/src/public/uploads"));

Router(app);

// connect mysql
// Role.sync().then(() => {
//   console.log("role ok");
// });

// User.sync().then(() => {
//   console.log("user ok");
// });

// Address.sync().then(() => {
//   console.log("address ok");
// });

// Category.sync().then(() => {
//   console.log("Category ok");
// });

// Product.sync().then(() => {
//   console.log("Product ok");
// });

// Image.sync().then(() => {
//   console.log("Image ok");
// });

// Cart.sync().then(() => {
//   console.log("Cart ok");
// });

// Payment.sync().then(() => {
//   console.log("payment ok");
// });

// Order.sync().then(() => {
//   console.log("Order ok");
// });

// OrderItem.sync().then(() => {
//   console.log("Orderitem ok");
// });

// Favorite.sync().then(() => {
//   console.log("Favorite ok");
// });


app.listen(port, async () => {
  try {
    console.log("vvvvv", __dirname + "/src/public/uploads");
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log(`Server is running on port http://localhost:${port}`);
});
