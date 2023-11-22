import { Op } from "sequelize";
import { BadRequestException } from "../src/expeiptions/index.js";
import { MSG_COMMON } from "../src/messages/index.js";
// Chia chuỗi điều kiện thành mảng đối tượng { key, value }
export function parseQueryConditions(query) {
  if (query) {
    return query.split("&").map((condition) => {
      const data = condition.split("=");
      return { key: data[0], value: decodeURIComponent(data[1]) };
    });
  }
}

// Lọc dữ liệu dựa trên điều kiện
export function filterDataByConditions(dataArray, conditions) {
  if (conditions) {
    return dataArray.filter((data) => {
      return conditions.find(
        (condition) => condition.value == data[condition.key]
      );
    });
  }
}

// Lấy toàn bộ dữ liệu từ mô hình
export async function getData(model) {
  return model.findAll({raw: true});
}

// Lấy dữ liệu từ mô hình dựa trên ID
export async function getDataById(model, id) {
  return model.findByPk(id);
}

// Lấy dữ liệu từ mô hình dựa trên Email
export async function getDataByEmail(model, email) {
  return model.findOne({
    where: {
      email: email
    }
  });
}

// Chèn dữ liệu mới vào mô hình
export async function insertData(model, data) {
  try {
    return await model.create(data);
  } catch (error) {
    console.log(error);
    throw new BadRequestException( MSG_COMMON.MSG_ERROR.InternalServerException)
  }
}

// Xóa dữ liệu từ mô hình dựa trên ID
export async function deleteData(model, id) {
  return await model.destroy({
    where: {
      id: id,
    },
  });
}

// Chỉnh sửa dữ liệu trong mô hình dựa trên ID
export function editData(model, id, updatedData) {
  return model.update(updatedData, {
    where: {
      id: id,
    },
  });
}
