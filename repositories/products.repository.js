import {
  deleteItemById,
  getAllItems,
  insertItem,
  updateItem,
} from "../src/utils/db.util.js";

class ProductsRepository {
  async getProductsRepository() {
    const response = await getAllItems("products");
    return response
    
  }
  insertProductsRepository(product) {
    return insertItem("products", product);
  }
  updateProductsRepository(id, product) {
    return updateItem("src/models/products.json", id, product);
  }
  deleteProductsRepository(id) {
    return deleteItemById("src/models/products.json", id);
  }
}
export default ProductsRepository;
