
import { InternalServerException } from "../exceptions/index.js";
import { MSG_COMMON } from "../messages/message.js";


// get all data
export async function getAllItems(model) {
  try {
    const users = await model.findAll();
    return users;
  } catch (error) {
    throw new InternalServerException(MSG_COMMON.MSG_ERROR.InternalServerException, {
      msg: "",
    });
  }
}
// add data
export async function insertItem(model, data) {
  try {
    return await model.create(data);
  } catch (error) {
    throw new InternalServerException(MSG_COMMON.MSG_ERROR.InternalServerException, {
      msg: "",
    });
  }
}
// update data
export async function updateItem(model, id, entity) {
  try {
    await model.update(entity, { where: { id: id } });
  } catch (error) {
    throw error;
  }
}
// delete data By id
export async function deleteItemById(model, id) {
  try {
    await model.destroy({ where: { id: id } });
    return true;
  } catch (error) {
    throw error;
  }
}
