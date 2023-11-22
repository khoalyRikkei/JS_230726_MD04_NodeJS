const User = require("../entities/users.entity");

// Middleware để kiểm tra sự tồn tại của người dùng
const checkUserExist = async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  const checkUser = await User.findOne({ where: { email: email } });
  if (checkUser) {
    return res.status(409).json({ msg: "email already exists" });
  } else {
    res.status(200).json({ msg: " pass" });
    next();
  }

  // } catch (error) {
  //   console.error("Error in checkUserExistence:", error);
  //   res.status(500).json({ msg: "server error" });
};

module.exports = checkUserExist;
