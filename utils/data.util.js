import { Op } from 'sequelize';

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
  return model.findAll();
}

// Lấy dữ liệu từ mô hình dựa trên ID
export async function getDataById(model, id) {
  return model.findByPk(id);
}

// Chèn dữ liệu mới vào mô hình
export function insertData(model, data) {
  return model.create(data);
}

// Xóa dữ liệu từ mô hình dựa trên ID
export function deleteData(model, id) {
  return model.destroy({
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
