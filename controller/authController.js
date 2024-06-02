const joi = require("joi");
const authService = require("../services/authService");

const loginSchema = joi.object().keys({
  name: joi.string().required(),
  password: joi.string().min(3).max(9).required(),
});

module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);
      const login = await authService.login(validate);

      return res.send({
        message: "User Registered",
        data: validate,
      });
    } catch (error) {
      return res.send({ message: error.message });
    }
  },
  logout: (req, res) => {
    return res.send({
      messge: "User Log Out",
    });
  },
};
