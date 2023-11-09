import fs from "fs";
import { connection } from "../src/dataMySQL/config.js";

export function parseQueryConditions(query) {
  if (query) {
    return query.split("&").map((condition) => {
      const data = condition.split("=");
      return { key: data[0], value: decodeURIComponent(data[1]) };
    });
  }
}

// Lọc theo điều kiện
export function filterDataByConditions(dataArray, conditions) {
  if (conditions) {
    return dataArray.filter((data) => {
      return conditions.find(
        (condition) => condition.value == data[condition.key]
      );
    });
  }
}

// Lấy Dữ liệu
export function getData(resource) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${resource}`, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

// Tạo Dữ liệu

export function insertData(tableName, data) {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject("Data is null or undefined");
      return;
    }

    const dataArray = Array.isArray(data) ? data : [data];
    if (data.length === 0) {
      reject("Object array is empty");
      return;
    }

    const keys = Object.keys(dataArray[0]);
    const values = dataArray.map((obj) => keys.map((key) => obj[key]));
    const sql = `INSERT INTO ${tableName} (${keys.join(",")}) VALUES ?`;

    connection.query(sql, [values], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// XÓA Dữ liệu
export function deleteData(resource, id) {
  return new Promise((resolve, reject) => {
    const disableForeignKeysQuery = `SET FOREIGN_KEY_CHECKS=0`;
    const deleteDataQuery = `DELETE FROM ${resource} WHERE id=${id}`;
    const enableForeignKeysQuery = `SET FOREIGN_KEY_CHECKS=1`;

    connection.query(disableForeignKeysQuery, (disableError) => {
      if (disableError) {
        // Xảy ra lỗi khi tắt kiểm tra khóa ngoại
        reject(disableError);
      } else {
        // Tắt thành công, tiến hành xóa dữ liệu
        connection.query(deleteDataQuery, (err, data) => {
          if (err) {
            // Xảy ra lỗi khi xóa dữ liệu
            reject(err);
          } else {
            // Xóa thành công, bật lại kiểm tra khóa ngoại
            connection.query(enableForeignKeysQuery, (enableError) => {
              if (enableError) {
                // Xảy ra lỗi khi bật kiểm tra khóa ngoại
                reject(enableError);
              } else {
                // Hoàn thành toàn bộ quá trình
                resolve(data);
              }
            });
          }
        });
      }
    });
  });
}

// Sửa Dữ liệu
export function editData(tableName, id, updatedData) {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE ${tableName} SET ? WHERE id = ?`;

    connection.query(sql, [updatedData, id], (error, results) => {
      connection.end();

      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
