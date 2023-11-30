const Cart = require("./cart.model");
const ImageProduct = require("./imageProduct.model");
const Product = require("./product.model");
const Orders = require("./orders.model");
const User = require("./user.model");
const Category = require("./category.model");
const OrderDetail = require("./order-detail.model");
const Reviews = require("./reviews");
const Feedback = require("./feedback");
const Discount = require("./discount");
const ShippingAddress = require("./shippingAddress.model");

//user - cart
User.hasMany(Cart, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Cart.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

//user - orders
User.hasMany(Orders, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Orders.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

//user - reviews
User.hasMany(Reviews, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Reviews.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

//user - feedback
User.hasMany(Feedback, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Feedback.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

//category - product
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

//product - cart
Product.hasMany(Cart, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Cart.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

//product - imageProduct
Product.hasMany(ImageProduct, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
ImageProduct.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

//product - orderDetail
Product.hasMany(OrderDetail, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
OrderDetail.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

//product - reviews
Product.hasMany(Reviews, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Reviews.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Orders.hasMany(OrderDetail, { foreignKey: "order_id" });
OrderDetail.belongsTo(Orders, { foreignKey: "order_id" });

ShippingAddress.hasMany(Orders, { foreignKey: "shipping_address_id" });
Orders.belongsTo(ShippingAddress, { foreignKey: "shipping_address_id" });

module.exports = {
  Cart,
  ImageProduct,
  Product,
  Orders,
  User,
  Category,
  OrderDetail,
  Reviews,
  Feedback,
  Discount,
  ShippingAddress,
};