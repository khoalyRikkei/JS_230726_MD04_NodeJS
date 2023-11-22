const connection = require("../configs/db.config");
const { loginService } = require("../services/authen.service");

const login = async (req, res) => {
  const userLogin = { ...req.body };

  try {
    const ret = await loginService(userLogin);
    console.log("controller", ret);
    // Additional logic based on the successful login
    res.status(200).json({ message: "Login success", data: ret });
  } catch (error) {
    console.error("Errorcontroller:", error);

    if (error instanceof AuthenticationError) {
      res.status(401).json({
        message: "Unauthorized",
        errors: {
          messageLogin: "Email or password is incorrect",
        },
      });
    } else {
      res.status(500).json({
        message: "Internal Server Error",
        errors: {
          messageLogin: "An unexpected error during login.",
        },
      });
    }
  }
};

module.exports = { login };
