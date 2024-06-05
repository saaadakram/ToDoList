const joi = require("joi");
const authService = require("../services/authService");

const loginSchema = joi.object().keys({
  userName: joi.string().required(),
  password: joi.string().min(3).max(9).required(),
});

module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);
      const login = await authService.login(validate);
      if (login.error) {
        return res.send({
          error: login.error,
        });
      }
      res.cookie("auth", login.response.token);
      delete login.response.token;

      return res.send({
        response: login.response,
      });
    } catch (error) {
      return res.send({ message: error });
    }
  },
  logout: (req, res) => {
    return res.send({
      messge: "User Log Out",
    });
  },
};
