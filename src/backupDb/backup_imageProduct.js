const ImageProduct = require("../models/imageProduct.model"); // Import model ImageProduct từ file imageProduct.model

const seedImageData = async () => {
  const images = [
    {
      id: "uripjvxwxqymw6dlalkt",
      url: "http://res.cloudinary.com/dsq0mydrb/image/upload/v1700710936/uripjvxwxqymw6dlalkt.jpg",
    },
    {
      id: "fkzjvrdima0rxj2hptsw",
      url: "http://res.cloudinary.com/dsq0mydrb/image/upload/v1700710936/fkzjvrdima0rxj2hptsw.jpg",
    },
    {
      id: "rj0fp9jofqk0abmc72oo",
      url: "http://res.cloudinary.com/dsq0mydrb/image/upload/v1700710936/rj0fp9jofqk0abmc72oo.jpg",
    },
    {
      id: "dhie1ac4okifyxlkjwhz",
      url: "http://res.cloudinary.com/dsq0mydrb/image/upload/v1700710936/dhie1ac4okifyxlkjwhz.jpg",
    },
  ];
  try {
    const productsWithImages = {}; // Đối tượng lưu trữ product_id với mảng các hình ảnh tương ứng

    const numberOfProducts = 10; // Số lượng sản phẩm từ 1 đến 10

    images.forEach((image, index) => {
      const productId = (index % numberOfProducts) + 1;
      if (!productsWithImages[productId]) {
        productsWithImages[productId] = [];
      }
      productsWithImages[productId].push({
        imageUrl: image.url,
        public_id: image.id,
      });
    });

    // Tạo dữ liệu theo từng sản phẩm với nhiều hình ảnh
    for (const productId in productsWithImages) {
      const productImages = productsWithImages[productId];
      await Promise.all(
        productImages.map(async (image) => {
          await ImageProduct.create({
            imageUrl: image.imageUrl,
            public_id: image.public_id,
            product_id: productId,
          });
        })
      );
      console.log(`Đã tạo mới ${productImages.length} ảnh cho sản phẩm với ID: ${productId}`);
    }
  } catch (error) {
    console.error("Lỗi khi tạo dữ liệu:", error);
  }
};

module.exports = seedImageData;

const images = [
  {
    id: "bjoyfpshuzqswvxmalxq",
    url: "http://res.cloudinary.com/dsq0mydrb/image/upload/v1700794903/bjoyfpshuzqswvxmalxq.jpg",
  },
  {
    id: "cuk1gycm6v6qtukmmyu0",
    url: "http://res.cloudinary.com/dsq0mydrb/image/upload/v1700794903/cuk1gycm6v6qtukmmyu0.jpg",
  },
  {
    id: "ztcd6cq3zqbbit6qmi9t",
    url: "http://res.cloudinary.com/dsq0mydrb/image/upload/v1700794903/ztcd6cq3zqbbit6qmi9t.jpg",
  },
  {
    id: "mqaqjl0cyi3dq3nbiwmp",
    url: "http://res.cloudinary.com/dsq0mydrb/image/upload/v1700794903/mqaqjl0cyi3dq3nbiwmp.jpg",
  },
];
