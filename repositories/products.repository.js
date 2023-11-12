import Product from "../src/models/product.model.js";
import {
  deleteItemById,
  getAllItems,
  insertItem,
  updateItem,
} from "../src/utils/db.util.js";
// get all products
class ProductsRepository {
  async getProductsRepository() {
    const response = await getAllItems(Product);
    return response
    
  }
  // insert a new product
 async insertProductsRepository(dataModal) {
    const response=await insertItem(Product, dataModal);
    return response
  }
  updateProductsRepository(id, product) {
    return updateItem("src/models/products.json", id, product);
  }
  // delete a product
 async deleteProductsRepository(id) {
  const response=await deleteItemById(Product, id);
  return response
  }
}
export default ProductsRepository;
