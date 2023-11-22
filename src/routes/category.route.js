const express = require("express");

const categoryRouter = express.Router();

categoryRouter.delete("/:id", () => {
  // Xóa categories
});

categoryRouter.get("/:id", () => {
  // Lọc theo categories id
});

categoryRouter.get("/", () => {
  // lấy toàn bộ categories
});

categoryRouter.post("/", () => {
  // tạo mới category
});

categoryRouter.put("/:id", () => {
  // edit a category by id
});
