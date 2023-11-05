const fs = require("fs");

// dùng readFile --> đọc file
// writeFile --> ghi đè file

class DataBaseMethod {
  //get all du dieu
  getData(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(`./src/models/${filePath}.json`, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  //tao moi du lieu
  insertItem(filePath, entity) {
    try {
      const data = fs.readFileSync(`./src/models/${filePath}.json`, "utf8");
      const entities = JSON.parse(data);

      if (entities.length > 0) {
        const id = +entities[entities.length - 1].id + 1;
        entity.id = id;
      } else {
        entity.id = 1;
      }

      entities.push(entity);

      fs.writeFileSync(`./src/models/${filePath}.json`, JSON.stringify(entities));

      return entity.id;
    } catch (error) {
      return 0;
    }
  }

  //update du lieu
  updateItem(filePath, id, entity) {
    try {
      const data = fs.readFileSync(`./src/models/${filePath}.json`, "utf8");
      const entities = JSON.parse(data);
      let found = false;

      entities.forEach((_entity, index) => {
        if (_entity.id == id) {
          entities.splice(index, 1, entity);
          found = true;
        }
      });

      if (!found) {
        // Xử lý khi không tìm thấy id
        return 0;
      }

      fs.writeFileSync(`./src/models/${filePath}.json`, JSON.stringify(entities));
      return entity.id;
    } catch (error) {
      return 0;
    }
  }
  //delete du lieu
  deleteItemById(filePath, id) {
    try {
      const data = fs.readFileSync(`./src/models/${filePath}.json`, "utf8");
      const entities = JSON.parse(data);

      const delIndex = entities.findIndex((_entity) => _entity.id == id);

      if (delIndex !== -1) {
        entities.splice(delIndex, 1);
        fs.writeFileSync(`./src/models/${filePath}.json`, JSON.stringify(entities), "utf8");
        return true;
      } else {
        return false; // Không tìm thấy entity cần xóa
      }
    } catch (error) {
      return false;
    }
  }
}

module.exports = new DataBaseMethod();

// get --> dùng fs đọc --> trả về json
//url file

// insert --> đưa dữ liệu vào --> id
//url file, id --> push --> id mới

// update --> thay đổi dữ liệu --> data update
// url file

// delete --> true/false
