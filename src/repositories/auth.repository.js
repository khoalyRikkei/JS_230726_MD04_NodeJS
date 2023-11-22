const User = require("../entities/users.entity");

class authRepository {
  async register({ fullName, email, password, roleId }) {
    const imgDefault = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2Mi_cfTs8TCeXrAYAjtMArz3nMtsAeOruQ&usqp=CAU`;
    const response = await User.findOrCreate({
      where: { email },
      defaults: {
        fullName,
        email,
        password,
        avatar: imgDefault,
        roleId,
      },
    });
    return response;
  }
  async login(data) {
    const { email } = data;
    const user = await User.findOne({
      where: { email },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return user;
  }
}

module.exports = new authRepository();
