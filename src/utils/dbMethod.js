const insertData = async (data, model) => {
  try {
    const createdRecord = await model.create(data);
    return createdRecord;
  } catch (error) {
    throw error;
  }
};

const getData = async (model) => {
  try {
    const fetchedRecords = await model.findAll({ raw: true });
    return fetchedRecords;
  } catch (error) {
    throw error;
  }
};
const getDataById = async (id, model) => {
  try {
    const foundData = await model.findOne({
      where: {
        id: id,
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
    throw error;
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
    throw error;
  }
};

module.exports = { insertData, getData, getDataById, updateData, deleteData };
