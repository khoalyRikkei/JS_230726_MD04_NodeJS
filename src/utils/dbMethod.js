const insertData = async (data, tableName) => {
  try {
    const createdRecord = await tableName.create(data);
    return createdRecord;
  } catch (error) {
    throw error;
  }
};

const getData = async (tableName) => {
  try {
    const fetchedRecords = await tableName.findAll();
    return fetchedRecords;
  } catch (error) {
    throw error;
  }
};
const getDataById = async (id, tableName) => {
  try {
    const foundData = await tableName.findOne({
      where: {
        id: id,
      },
    });
    return foundData;
  } catch (error) {
    throw error;
  }
};

const updateData = async (id, data, tableName) => {
  try {
    const foundData = await tableName.findOne({
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
    throw error;
  }
};

const deleteData = async (id, tableName) => {
  try {
    const foundData = await tableName.findOne({
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
    throw error;
  }
};

module.exports = { insertData, getData, getDataById, updateData, deleteData };
