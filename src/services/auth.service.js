const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../middlewares/generateToken");
const authRepository = require("../repositories/auth.repository");
const { validateEmail, toTitleCase } = require("../middlewares/validator");
const salt = bcrypt.genSaltSync(10);
class authService {
  async register({ fullName, email, password, roleId }) {
    const errors = {};
    if (!fullName || !email || !password) {
      errors.fullName = "Field must not be empty";
      errors.email = "Field must not be empty";
      errors.password = "Field must not be empty";
      // return res.json({ error });
    }
    if (fullName.length < 3) {
      errors.fullName = "Full name must be at least 3 characters";
      // return res.json({ error });
    }
    if (!validateEmail(email)) {
      errors.email = "Email is not valid";
      // return res.json({ error });
    }
    if (password.length > 255 || password.length < 8) {
      errors.password = "Password must be 8 characters";
      // return res.json({ error });
    }
    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }
    try {
      const hashPassword = bcrypt.hashSync(password, salt);
      const response = await authRepository.register({
        fullName: toTitleCase(fullName),
        email,
        password: hashPassword,
        roleId,
      });
      if (response[1]) {
        return {
          success: true,
          message: "Create User successfully",
        };
      } else {
        return {
          success: false,
          message: "User is already registered",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
  async login(data) {
    try {
      const { email, password } = data;
      const user = await authRepository.login({
        email,
        password,
      });
      if (!user) {
        return { success: false, message: "Invalid email" };
      }
      const checkPassword = bcrypt.compareSync(password, user.password);

      if (!checkPassword) {
        return { success: false, message: "Invailid password" };
      }
      const token = generateAccessToken(
        user.id,
        user.fullName,
        user.email,
        user.password,
        user.roleId
      );
      console.log(checkPassword, "ccccc");
      const { password: hiddenPassword, ...noPassword } =
        user?.dataValues || {};
      return {
        success: true,
        data: noPassword,
        accessToken: token,
      };
    } catch (error) {
      console.log(error);
      return error;
    }
    // const { email, password } = data;

    //   try {
    //     //check U sơ có đúng không
    //     const checkUser = await authRepository.login(email);
    //     if (!checkUser) {
    //       return { msg: "Password or email is not valid", status: 401 };
    //     }
    //     //sau khi check U sơ thành công sẽ check password gửi lên đúng không
    //     const checkPass = await bcrypt.compare(
    //       password,
    //       checkUser.dataValues.password
    //     ); // trả về giá trị true hoặc false 2 tham số (password gửi lên,password trong db)
    //     if (checkPass) {
    //       const { password, ...data } = checkUser.dataValues;
    //       const jwtData = generateAccessToken(checkUser);
    //       console.log(generateAccessToken, "???");
    //       // const jwtData = jwt.sign(data, process.env.ACCESS_TOKEN_SCERET)
    //       return {
    //         msg: "login successfully",
    //         accessToken: jwtData,
    //         data: data,
    //         status: 200,
    //       };
    //     } else {
    //       return { msg: "Password or email is not valid", status: 401 };
    //     }
    //   } catch (error) {
    //     console.log("3333333333", error);
    //     return { msg: "Error", status: 400 };
    //   }
    // }
  }
}

module.exports = new authService();
