import ProductsRepository from "../repositories/products.repository.js";

const productsRepository = new ProductsRepository();

class ProductsService {
  async getProducts() {
    const getAllProducts = await productsRepository.getProducts();
    return getAllProducts;
  }
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
  async insertProduct(dataModal) {
    const response = await productsRepository.insertProducts(
      dataModal
    );
    return response;
  }
 async updateProduct(id, product) {
    const response=await productsRepository.updateProducts(id, product);
    return response
  }
  async deleteProduct(id) {
    const response = await productsRepository.deleteProducts(id);
    return response;
  }
}

export default ProductsService;
