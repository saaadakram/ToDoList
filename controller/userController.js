const joi = require("joi");
const userService = require("../services/userSevice");
const createUserSchema = joi.object().keys({
  userName: joi.string().min(5).max(20).required(),
  password: joi.string().required(),
  confirmPassword: joi.ref("password"),
});

const getUserSchema = joi.object().keys({
  userName: joi.string().min(5).max(20).required(),
  password: joi.string().required(),
});

const deleteUserschema = joi.object().keys({
  userPassword: joi.string().required(),
});

module.exports = {
  createUser: async (req, res) => {
    try {
      const userValidate = await createUserSchema.validateAsync(req.body);
      const user = await userService.createUser(userValidate);
      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      return res.send({ message: error.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const userValidate = await getUserSchema.validateAsync(req.body);
      const user = await userService.getUser(userValidate);
      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
    } catch (error) {
      return res.send({ message: error.message });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const user = await userService.getAllUsers();
      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      return res.send({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const validate = await deleteUserschema.validateAsync(req.query);
      const deleteUser = await userService.deleteUser(validate.userId);
      if (deleteUser.error) {
        return res.send({
          error: deleteUser.error,
        });
      }
      return res.send({
        response: deleteUser.response,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },
};
