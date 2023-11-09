// get the client
const mysql = require("mysql2");
class UserRepository {
  getAllUser() {
    //ket noi database

    // create the connection to database
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: SQL_PASSWORD,
      database: SQL_DATABASE,
    });

    // Mở kết nối
    connection.connect((err) => {
      if (err) {
        console.error("Lỗi kết nối: " + err.stack);
        return;
      }
      console.log("Kết nối thành công vào cơ sở dữ liệu MySQL");

      // Câu lệnh tạo bảng
      const createTableQuery = `
    CREATE TABLE users (
      id INT AUTO_INCREMENT,
      user_name VARCHAR(50) NOT NULL,
      full_name VARCHAR(50),
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(50) NOT NULL,
      status INT (10) NOT NULL,
      role INT (10) NOT NULL,
      phone VARCHAR(10),
      address VARCHAR(100),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      PRIMARY KEY (id)
    )
  `;

      // Thực thi câu lệnh tạo bảng
      connection.query(createTableQuery, (error, results, fields) => {
        if (error) {
          console.error("Lỗi tạo bảng: " + error.message);
        } else {
          console.log("Bảng đã được tạo thành công");
        }
        // Đóng kết nối sau khi thực hiện xong
        connection.end();
      });
    });
  }
  createUser() {}
  updateUser() {}
  deleteUser() {}
}
module.exports = new UserRepository();
