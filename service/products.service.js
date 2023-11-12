import ProductsRepository from "../repositories/products.repository.js";

const productsRepository = new ProductsRepository();

class ProductsService {
  async getProductsService() {
    const getAllProducts = await productsRepository.getProductsRepository();
    return getAllProducts;
  }
  async getProductsByIdService(id) {
    const getAllProducts = await productsRepository.getProductsRepository();
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
  async insertProductService(dataModal) {
    const response = await productsRepository.insertProductsRepository(
      dataModal
    );
    return response;
  }
  updateProductService(id, product) {
    return productsRepository.updateProductsRepository(id, product);
  }
  async deleteProductService(id) {
    const response = await productsRepository.deleteProductsRepository(id);
    return response;
  }
}

export default ProductsService;
