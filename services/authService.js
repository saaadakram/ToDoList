require("dotenv").config;
const { compare } = require("bcryptjs");
const userModel = require("../models/userModel");
const { response } = require("../app");
const { sign } = require("jsonwebtoken");

module.exports = {
  login: async (body) => {
    try {
      const user = await userModel.getUser(false, body.userName);
      if (user.error || !user.response) {
        return {
          error: {
            message: "invalid credentials",
            error: user?.error || user.response,
          },
        };
      }
      const isValid = await compare(
        body.password,
        user.response.dataValues.password
      );
      if (!isValid) {
        return {
          response: {
            message: "invalid credentials",
            response: false,
            token: undefined,
          },
        };
      }
      delete user.response.dataValues.password;
      const token = sign(user.response.dataValues, process.env.SECRET);
      console.log("token", token);
      return {
        response: {
          message: "logged in successfully",
          response: true,
        },
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
