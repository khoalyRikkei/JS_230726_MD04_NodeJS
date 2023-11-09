import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { route } from "./routes/index.js";
import {
  connectToDB,
  closeConnection,
  connection,
} from "./dataMySQL/config.js";
const app = express();
// Dùng middleware bodyParser để lấy dữ liệu từ body gttp request
app.use(bodyParser.urlencoded({ extended: true }));

route(app);

// // Kết nối đến cơ sở dữ liệu
connectToDB();
// // Đóng kết nối khi hoàn thành
// closeConnection();


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Connecting to http://localhost:${PORT}`);
});
