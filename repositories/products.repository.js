import Product from "../src/models/product.model.js";
import {
  deleteItemById,
  getAllItems,
  insertItem,
  updateItem,
} from "../src/utils/db.util.js";
// ===================get all products================
class ProductsRepository {
  async getProducts() {
    const response = await getAllItems(Product);

    return response;
  }
  // ===============insert a new product===============
  async insertProducts(entity) {
    const response = await insertItem(Product, entity);
    return response;
  }
  // ===============update a product==================
 async updateProducts(id, entity) {
    return await updateItem(Product, id, entity);
  }
  // ===============delete a product==================
  async deleteProducts(id) {
    const response = await deleteItemById(Product, id);
    return response;
  }
}
export default ProductsRepository;
