import { ServerException } from "../expeiptions/expeiption.js";
import { MSG_COMMON } from "../messages/message.js";
import User from "../models/user.model.js";
const User_2 = new User();

const getData = () => {
  try {
    const data = [{ name: "" }];

    return data;
  } catch (err) {
    throw new ServerException(MSG_COMMON.MSG_ERROR.InternalServerException);
  }
};

const insertUser = async (data) => {
  try {
    const user = await User.create({ ...data });
    return user;
  } catch (error) {
    throw new ServerException(MSG_COMMON.MSG_ERROR.InternalServerException, {
      msg: "DDawng ki khong thanh cong",
    });
  }
};

const getAllUsers = async () => {
  try {
    console.log(111);
    const users = await User.findAll();
    console.log(users);
    return users;
  } catch (error) {
    throw new ServerException(MSG_COMMON.MSG_ERROR.InternalServerException, {
      msg: "DDawng ki khong thanh cong",
    });
  }
};

export default {
  getData,
  insertUser,
  getAllUsers,
};
