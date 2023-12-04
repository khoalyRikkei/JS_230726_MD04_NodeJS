import ProductsRepository from "../repositories/products.repository.js";
const productsRepository = new ProductsRepository();

class ProductsService {
  // =============== getProducts =========================
  async getProducts() {
    const getAllProducts = await productsRepository.getProducts();
    return getAllProducts;
  }
  // =============== get product by id =========================
  async getProductsById(id) {
    const getAllProducts = await productsRepository.getProducts();
    const product = getAllProducts.find((item) => item.id == id);
    if (product) {
      return {
        status: true,
        message: "",
        data: product,
      };
    } else {
      return {
        status: false,
        message: "",
        data: null,
      };
    }
  }
  // ================ insert new Product =================
  async insertProduct(dataModal) {
    const response = await productsRepository.insertProducts(
      dataModal
    );
    return response;
  }
  // ================ update product ====================
 async updateProduct(id, product) {
    const response=await productsRepository.updateProducts(id, product);
    return response
  }
  // ================ delete product ====================
  async deleteProduct(id) {
    const response = await productsRepository.deleteProducts(id);
    return response;
  }
}

export default ProductsService;
