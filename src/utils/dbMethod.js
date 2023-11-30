const moment = require("moment");
const { ServerException } = require("../expeiptions");
//insert object
const insertData = async (data, model) => {
  try {
    const createdRecord = await model.create(data);
    return createdRecord;
  } catch (error) {
    throw new ServerException("ServerException", 500, error.message);
  }
};

//insert array
const insertDataArr = async (data, model) => {
  try {
    return await model.bulkCreate(data);
  } catch (error) {
    throw new ServerException("ServerException", 500, error.message);
  }
};

const getData = async (model) => {
  try {
    if (!model || typeof model.findAll !== "function") {
      throw new Error("Model không hợp lệ.");
    }

    const fetchedRecords = await model.findAll({
      where: {
        deletedAt: null,
      },
      raw: true,
    });

    return fetchedRecords;
  } catch (error) {
    throw new ServerException("ServerException", 500, error.message);
  }
};
const getDataById = async (id, model) => {
  try {
    const foundData = await model.findOne({
      where: {
        id: id,
        deletedAt: null,
      },
    });
    return foundData;
  } catch (error) {
    throw error;
  }
};

const updateData = async (id, data, model) => {
  try {
    const foundData = await model.findOne({
      where: {
        id: id,
      },
    });

    if (foundData) {
      await foundData.update(data);
      return foundData;
    } else {
      return null;
    }
  } catch (error) {
    throw new ServerException("ServerException", 500, error.message);
  }
};

const deleteData = async (id, model) => {
  try {
    const foundData = await model.findOne({
      where: {
        id: id,
      },
    });

    if (foundData) {
      await foundData.destroy();
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    throw new ServerException("ServerException", 500, error.message);
  }
};

const softDeleteData = async (id, model) => {
  try {
    const foundData = await model.findOne({
      where: {
        id: id,
      },
    });

    if (foundData) {
      // Thực hiện cập nhật trường deletedAt để đánh dấu bản ghi đã bị xóa
      await foundData.update({ deletedAt: moment(new Date()).format("YYYY-MM-DD") });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    throw new ServerException("ServerException", 500, error.message);
  }
};

const restoreData = async (id, model) => {
  try {
    const foundData = await model.findOne({
      where: {
        id: id,
        deletedAt: { [Sequelize.Op.ne]: null }, // Chỉ tìm kiếm bản ghi đã bị xóa mềm
      },
    });

    if (foundData) {
      // Thực hiện cập nhật trường deletedAt thành null để khôi phục bản ghi
      await foundData.update({ deletedAt: null });
      return true;
    } else {
      return false; // Bản ghi không tìm thấy hoặc đã được khôi phục trước đó
    }
  } catch (error) {
    console.error(error);
    throw new ServerException("ServerException", 500, error.message);
  }
};

module.exports = {
  insertData,
  getData,
  getDataById,
  updateData,
  softDeleteData,
  restoreData,
  deleteData,
  insertDataArr,
};