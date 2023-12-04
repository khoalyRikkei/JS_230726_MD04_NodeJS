// ================get all data=====================
export async function getAllItems(model) {
  try {
    const users = await model.findAll({ raw: true });
    return users;
  } catch (error) {
    throw error;
  }
}
// =================== add data ====================
export async function insertItem(Model, data) {
  try {
    return await Model.create(data);
  } catch (error) {
    throw error;
  }
}
// ===================update data==================
export async function updateItem(model, id, entity) {
  try {
    await model.update(entity, { where: { id: id } });
  } catch (error) {
    throw error;
  }
}
// ===================delete data By id ==============
export async function deleteItemById(model, id) {
  try {
    await model.destroy({ where: { id: id } });
    return true;
  } catch (error) {
    throw error;
  }
}
// ====================  get data by id =================
export async function getItemById(model, id) {
  try {
    const response = await model.findOne({ where: { id: id } });
    return response;
  } catch (error) {
    throw error;
  }
}
