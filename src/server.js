// import "dotenv/config";
// import fs from "fs";
// import { createServer } from "http";
// import url from "url";
// import querystring from "querystring";
// import { getData } from "./utils/method.js";

// const server = createServer((req, res) => {
//   const { pathname, query } = url.parse(req.url);

//   res.setHeader("Content-Type", "application/json");
//   const dataQuery = querystring.parse(query); //chuyển đổi query thành object
//   console.log("method", req.method);
//   if (req.method === "GET") {
//     switch (pathname) {
//       case "/api/products":
//         const fileProduct = fs.readFileSync("src/models/products.json", "utf8");
//         if (query) {
//           const listProduct = JSON.parse(fileProduct);
//           const newData = listProduct.filter((product) => {
//             for (const key in dataQuery) {
//               if (product[key] == dataQuery[key]) {
//                 return true;
//               }
//             }
//           });

//           res.write(JSON.stringify(newData));
//           return res.end();
//         }
//         res.write(fileProduct);
//         res.end();
//         break;
//       case "/api/users":
//         const fileUsers = fs.readFileSync("src/models/users.json", "utf8");
//         if (query) {
//           const listUsers = JSON.parse(fileUsers);
//           const newData = listUsers.filter((users) => {
//             for (const key in dataQuery) {
//               if (users[key] == dataQuery[key]) {
//                 return true;
//               }
//             }
//           });

//           res.write(JSON.stringify(newData));
//           return res.end();
//         }
//         res.write(fileUsers);
//         res.end();
//         break;
//       case "/api/orders":
//         const fileOrders = fs.readFileSync("src/models/orders.json", "utf8");
//         if (query) {
//           res.write(JSON.stringify(getData(fileOrders, dataQuery)));
//           return res.end();
//         }
//         res.write(fileOrders);
//         res.end();
//         break;

//       default:
//         res.write("<h1>page not found</h1>");
//         break;
//     }
//     res.end();
//   }

//   if (req.method === "POST") {
//      const fileUsers = fs.readFileSync("src/models/users.json", "utf8");
//     const listUsers = JSON.parse(fileUsers);
//     const userLogin = listUsers.filter((users) => {
//         if (
//         users.email == dataQuery.email &&
//         users.password == dataQuery.password
//       ) {
//         return true;
//       }
//     });

//     if (userLogin.length>0) {

//       const successLogin = {
//         status: true,
//         message: "Đăng nhập thành công",
//         data: userLogin,
//       };
//       res.write(JSON.stringify(successLogin.message));
//       res.end();
//     } else {
//       const errorLogin = {
//         status: false,
//         message: "Đăng nhập thất bại",
//         data: "",
//       };
//       res.write(JSON.stringify(errorLogin.message));
//       res.end();
//     }
//   }
// });
// console.log("xin chào");
// // const PORT = process.env.PORT; //lấy PORT từ env
// const PORT = 8888;
// server.listen(PORT, () => {
//   console.log(`xin chào http://localhost:${PORT}`);
// });
import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import { route } from "./routes/index.js";

const app = express();
// thay thế cho setHeader đọc file json

app.use(express.json());
// dùng middleware body parser để lấy dữ liệu từ body http request
app.use(bodyParser.urlencoded({ extended: true }));

route(app);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`xin chào http://localhost:${PORT}`);
});
