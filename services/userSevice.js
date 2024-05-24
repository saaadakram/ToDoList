const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
const userModel = require("../models/userModel");

module.exports = {
  createUser: async (body) => {
    try {
      delete body.confirmPassword;

      const isUser = await userModel.getUser(false, body.userName);
      console.log(isUser, "isUser");
      if (isUser.error || isUser.response) {
        return {
          error: "user already existed",
        };
      }

      body.password = await hash(body.password, 10);
      body.userId = uuid();

      const user = await userModel.createUser(body);
      console.log(user, "created user");
      if (user.error) {
        return {
          error: user.error,
        };
      }
      delete user.response.password;
      return {
        response: user.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
