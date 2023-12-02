const productService = require("../services/product.service");

// Hàm để lấy danh sách sản phẩm
const getProducts = async (req, res) => {
  try {
    const ret = await productService.getProducts();
    return res.status(200).json(ret);
  } catch (error) {}
  res.status(500).json({ errormessage: "internal error" });
};

// tìm sản phẩm theo tên
const getProductByName = async (req, res) => {
  try {
    const productName = req.params.name;
    const productData = await productService.getProductByName(productName);

    res.status(200).json(productData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
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
const createProduct = async (req, res) => {
  try {
    const newProductId = await productService.createProduct(req.body);
    res
      .status(201)
      .json({
        productId: newProductId,
        message: "Product created successfully",
      });
  } catch (error) {
    console.error(444444, error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const rowToDelete = await productService.deleteProduct(productId);

    if (rowToDelete > 0) {
      res.status(204).json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const editProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedData = req.body;
    console.log(4444, updatedData);

    const result = await productService.editProduct(productId, updatedData);

    if (result) {
      res.status(200).json({ message: "Product updated successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
    console.log(5555, error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  getProductByName,
  editProduct,
};
