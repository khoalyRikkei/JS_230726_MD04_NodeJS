import authServer from "../services/auth.server.js";

const login = (req, res, next) => {
  /* 
    #swagger.tags = ['auth']

    #swagger.parameters['body'] = {
        in: 'body',
        description: 'User data.',
        required: true,
        schema: {
            username: "user",
            password: "1234"
        }
    }
    */
  const error = true;
  try {
    res.status(200).json({ message: "Thành công" });
  } catch (error) {
    next(error);
  }
};
const register = async (req, res, next) => {
  /* 
    #swagger.tags = ['auth']

    #swagger.parameters['body'] = {
        in: 'body',
        description: 'User data.',
        required: true,
        schema: {
             username: "DataTypes.STRING",
    doB: "DataTypes.DATE",
    gender: "DataTypes.BOOLEAN",
    password: "DataTypes.STRING",
    email:" DataTypes.STRING(20)",
    address: "DataTypes.STRING",
        }
    }
    */
  console.log(111111111);
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
