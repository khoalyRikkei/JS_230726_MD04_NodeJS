import fs from "fs";
import { connection } from "./config.js";

// get data
export function getAllItems(tableName) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${tableName}`, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}
// add data
// export function insertItem(filePath, entity) {
//   try {
//     if (!entity.id) {
//       const entities = JSON.parse(fs.readFileSync(filePath, "utf8"));
//       let id = 0;
//       for (const _entity of entities) {
//         if (_entity.id > id) {
//           id = _entity.id;
//         }
//       }

//       entity.id = id + 1;
//       entities.push(entity);
//       fs.writeFileSync(filePath, JSON.stringify(entities));
//       return entity.id;
//     }
//     return 0;
//   } catch (error) {
//     return 0;
//   }
// }
export function insertItem(tableName, data) {
  const keys = Object.keys(data[0]);
  const newData = data.map((obj) => {
    const values = Object.values(obj);
    const newValues = values.map((val) =>
      typeof val === "string" ? "'" + val + "'" : val
    );
    return `(${Object.values(newValues).join()})`;
  });
  return `INSERT INTO ${tableName}(${keys})
    VALUES ${newData}`;
}

// update data
export function updateItem(filePath, id, entity) {
  try {
    const entities = JSON.parse(fs.readFileSync(filePath, "utf8"));
    entities.forEach((_entity, index) => {
      if (_entity.id == id) {
        entities.splice(index, 1, entity);
      }
      fs.writeFileSync(filePath, JSON.stringify(entities));

      return entity.id;
    });
  } catch (error) {
    return 0;
  }
}
// delete data By id
export function deleteItemById(filePath, id) {
  try {
    const entities = JSON.parse(fs.readFileSync(filePath, "utf8"));

    let delIndex = -1;
    for (let i = 0; i < entities.length; i++) {
      const _entity = entities[i];
      if (_entity.id == id) {
        delIndex = i;
      }
    }
    console.log("index", delIndex);
    if (delIndex !== -1) {
      entities.splice(delIndex, 1);

      fs.writeFileSync(filePath, JSON.stringify(entities));
      return true;
    }
  } catch (error) {
    return false;
  }
}
