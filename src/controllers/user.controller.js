const moment = require("moment");
const userService = require("../services/user.service");
const { ServerException, CustomException } = require("../expeiptions");
class UserController {
  async register(req, res, next) {
    try {
      const model = {
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
        role: 0,
        status: 1,
        created_at: moment(new Date()).format("YYYY-MM-DD"),
        updated_at: moment(new Date()).format("YYYY-MM-DD"),
      };

      const response = await userService.register(model);

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
  async login(req, res, next) {
    try {
      const model = {
        email: req.body.email,
        password: req.body.password,
      };
      const response = await userService.login(model);

      // Set access token vào header
      res.setHeader("Authorization", `${response.token}`);

      // res.cookie("refreshToken", response.ac_refreshToken, {
      //   httpOnly: true,
      //   maxAge: 7 * 24 * 60 * 60 * 1000,
      // });
      res.status(200).json(response.user);
    } catch (error) {
      next(error);
    }
  }
  async getAllUser(req, res, next) {
    try {
      const model = {};
      const limit = req.query.limit ? parseInt(req.query.limit, 10) : null;
      const name = req.query.name;
      const orderByName = req.query.order;
      const page = req.query.page || 1;

      const filterConditions = {};

      if (limit !== null) {
        const offset = (page - 1) * limit;
        model.limit = limit;
        model.offset = offset;
      }

      if (name) {
        filterConditions.user_name = name;
      }

      const order = [];
      if (orderByName) {
        order.push(["user_name", orderByName.toUpperCase()]);
      }

      model.filterConditions = filterConditions;
      model.order = order;
      model.limit = limit;

      console.log(model);
      let users;

      if (Object.keys(filterConditions).length === 0 || order !== null || limit !== null) {
        users = await userService.getAllUser(model);
      } else {
        users = await userService.getAllUser();
      }
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
  async getUserById(req, res, next) {
    try {
      const model = {
        id: req.params.id,
      };
      const user = await userService.getUserById(model);

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
  async updateUser(req, res, next) {
    try {
      const model = {
        id: req.params.id,
        newUser: {
          user_name: req.body.user_name,
          full_name: req.body.full_name,
          phone: req.body.phone,
          address: req.body.address,
          avatar: req.body.avatar,
          password: req.body.password,
        },
      };

      const response = await userService.updateUser(model);

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
  async updateStatusUser(req, res, next) {
    try {
      const model = {
        id: req.params.id,
        newUser: {
          status: req.body.status,
        },
      };

      const response = await userService.updateStatusUser(model);

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
  // async deleteUser(req, res, next) {
  //   try {
  //     const model = {
  //       id: req.params.id,
  //     };
  //     const res = await userService.deleteUser(model.id);

  //     res.status(200).json({});
  //   } catch (error) {
  //     const err = new ServerException("ServerException", 500, error.message);
  //     next(err);
  //   }
  // }
}
module.exports = new UserController();
