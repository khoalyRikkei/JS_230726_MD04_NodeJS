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
  insertProductService(product) {
    return productsRepository.insertProductsRepository(product);
  }
  updateProductService(id, product) {
    return productsRepository.updateProductsRepository(id, product);
  }
  deleteProductService(id) {
    return productsRepository.deleteProductsRepository(id);
  }
}

export default ProductsService;
