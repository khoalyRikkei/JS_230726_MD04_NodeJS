const products = [
  {
    sku: "Wooden",
    product_name: "Intelligent Fresh Pants",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    price: 67,
    quantity_stock: 75146,
    created_at: "2023-11-22T06:37:47.067Z",
    category_id: 1,
  },
  {
    sku: "Fresh",
    product_name: "Rustic Soft Tuna",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 83,
    quantity_stock: 24775,
    created_at: "2023-11-22T06:37:47.067Z",
    category_id: 2,
  },
  {
    sku: "Steel",
    product_name: "Small Frozen Bacon",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    price: 54,
    quantity_stock: 13419,
    created_at: "2023-11-22T06:37:47.067Z",
    category_id: 3,
  },
  {
    sku: "Rubber",
    product_name: "Fantastic Wooden Computer",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    price: 15,
    quantity_stock: 40008,
    created_at: "2023-11-22T06:37:47.067Z",
    category_id: 4,
  },
  {
    sku: "Steel",
    product_name: "Handcrafted Frozen Mouse",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    price: 40,
    quantity_stock: 71188,
    created_at: "2023-11-22T06:37:47.067Z",
    category_id: 4,
  },
  {
    sku: "Metal",
    product_name: "Oriental Bronze Sausages",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    price: 83,
    quantity_stock: 79030,
    created_at: "2023-11-22T06:37:47.067Z",
    category_id: 4,
  },
  {
    sku: "Granite",
    product_name: "Small Cotton Pants",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 36,
    quantity_stock: 38374,
    created_at: "2023-11-22T06:37:47.067Z",
    category_id: 3,
  },
  {
    sku: "Plastic",
    product_name: "Bespoke Metal Ball",
    description: "The Football Is Good For Training And Recreational Purposes",
    price: 3,
    quantity_stock: 55540,
    created_at: "2023-11-22T06:37:47.067Z",
    category_id: 2,
  },
  {
    sku: "Soft",
    product_name: "Ergonomic Frozen Cheese",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    price: 19,
    quantity_stock: 54420,
    created_at: "2023-11-22T06:37:47.067Z",
    category_id: 1,
  },
  {
    sku: "Rubber",
    product_name: "Rustic Fresh Chicken",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: 1,
    quantity_stock: 46390,
    created_at: "2023-11-22T06:37:47.067Z",
    category_id: 1,
  },
];

products.forEach(async (productData) => {
  try {
    await Product.create(productData); // Tạo một bản ghi mới trong bảng Product từ dữ liệu tương ứng
    console.log("Đã chèn dữ liệu thành công:", productData.product_name);
  } catch (error) {
    console.error("Lỗi khi chèn dữ liệu:", error);
  }
});
