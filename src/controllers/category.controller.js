import fs from "fs";

class CategoryController {
  getCategory(req, res) {
    const fileCategory = fs.readFileSync("src/models/category.json", "utf8");
    const listCategories = JSON.parse(fileCategory);
    res.send(listCategories);
  }
  
}
export default CategoryController;