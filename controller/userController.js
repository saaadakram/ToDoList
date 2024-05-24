const joi = require("joi");
const userService = require("../services/userSevice");
const createUserSchema = joi.object().keys({
  userName: joi.string().min(5).max(20).required(),
  password: joi.string().required(),
  confirmPassword: joi.ref("password"),
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
    console.log("inside getuser");
    try {
      res.send({ message: "i am connected" });
    } catch (error) {
      return res.send({ message: error.message });
    }
  },
};
