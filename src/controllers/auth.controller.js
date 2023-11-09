import authServer from "../services/auth.server.js";

const login = (req, res, next) => {
  const error = true;
  try {
    res.status(200).json({ message: "Thành công" });
  } catch (error) {
    next(error);
  }
};
const register = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const user = await authServer.registerUser(data);

    return res.status(200).json({ id: user.id });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await authServer.getUser();

    return res.status(200).json(user);
  } catch (error) {
    console.log(111, error);
    next(error);
  }
};

export default {
  login,
  register,
  getUser,
};