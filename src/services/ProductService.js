const productRepository = require("../repositories/ProductRepository");

class ProductService {
  async getProducts(model) {
    const jsonData = await productRepository.getAllProduct();
    const products = JSON.parse(jsonData);
    // console.log(products);
    const { q, category, price_min, price_max, sort, order } = model;
    // Logic xử lý filter
    let filteredProducts = [...products];
    if (category) {
      filteredProducts = filteredProducts.filter((product) => product.category === category);
    }
    // Logic xử lý lọc theo khoảng giá
    console.log(price_min, price_max);
    if (price_min && price_max) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.unit_price >= parseInt(price_min) && product.unit_price <= parseInt(price_max)
      );
    } else if (price_min) {
      filteredProducts = filteredProducts.filter(
        (product) => product.unit_price >= parseInt(price_min)
      );
    } else if (price_max) {
      filteredProducts = filteredProducts.filter(
        (product) => product.unit_price <= parseInt(price_max)
      );
    }
    if (q) {
      const searchName = q.toLowerCase();
      filteredProducts = filteredProducts.filter((product) =>
        product.product_name.toLowerCase().includes(searchName)
      );
    }

    // Logic xử lý sort
    if (sort) {
      if (sort === "product_name" || sort === "unit_price") {
        filteredProducts.sort((a, b) => {
          const comparison = a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
          return order === "desc" ? comparison * -1 : comparison;
        });
      }
    }

    return filteredProducts;
  }
  async getProductById(model) {
    const jsonData = await productRepository.getAllProduct();
    const products = JSON.parse(jsonData);
    const product = products.find((product) => product.id == model.id);
    if (product) {
      return product;
    } else {
      throw new Error("Product not found");
    }
  }
  createProduct(model) {
    const response = productRepository.createProduct(model.product);
    if (response) {
      return response;
    } else {
      throw new Error("Product created not successful");
    }
  }

  async updateProduct(model) {
    const response = productRepository.updateProduct(model);
    if (response) {
      return response;
    } else {
      throw new Error("Product updated not successful");
    }
  }

  deleteProduct(model) {
    const response = productRepository.deleteProduct(model);
    if (response) {
      return response;
    } else {
      throw Error;
    }
  }
}
module.exports = new ProductService();
