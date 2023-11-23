const productService = require("../services/product.service");

// Hàm để lấy danh sách sản phẩm
const getProducts = async (req, res) => {
  try {
    const ret = await productService.getProducts();
    return res.status(200).json(ret);
  } catch (error) {}
  res.status(500).json({ errormessage: "internal error" });
};

// Hàm để lấy thông tin sản phẩm dựa trên ID
const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = await productService.getProductById(productId);

    if (!productData) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(productData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Hàm để tạo sản phẩm mới
const createProduct = (req, res) => {
  const newProduct = req.body; // Lấy thông tin sản phẩm từ yêu cầu POST

  // Thực hiện xử lý để lưu sản phẩm mới vào danh sách sản phẩm

  res.status(201).json({ message: "Product created successfully" });
};
const deleteProduct = (req, res) => {
  const productId = req.params.id; // Lấy ID sản phẩm từ đường dẫn

  // Tìm sản phẩm trong danh sách sản phẩm
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.status(200).json({ product });
  //  xử lý xoá sản phẩm

  res.status(201).json({ message: "Product deleted successfully" });
};
module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
};
