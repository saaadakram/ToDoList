require("dotenv").config();
const { verify } = require("jsonwebtoken");

module.exports = {
  middleware: async (req, res, next) => {
    try {
      console.log(req.cookies);
      const token = req.cookies.auth;
    } catch (error) {}
  },
};
