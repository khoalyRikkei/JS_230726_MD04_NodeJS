const dataMethod = require("../utils/db.util");

class ProductRepository {
  async getAllProduct() {
    return await dataMethod.getData("products");
  }

  createProduct(model) {
    return dataMethod.insertItem("products", model);
  }
  updateProduct(model) {
    return dataMethod.updateItem("products", model.id, model.updateProduct);
  }
  deleteProduct(model) {
    return dataMethod.deleteItemById("products", model.id);
  }
}
module.exports = new ProductRepository();
