require("dotenv").config();
const { verify } = require("jsonwebtoken");

module.exports = {
  middleware: async (req, res, next) => {
    try {
      console.log(req.cookies);
      const token = req.cookies.auth;
      if (token === "undefined") {
        return res.send({
          response: "unauthorized",
        });
      }
      await verify(token, process.env.SECRET);
      next();
    } catch (error) {}
  },
};
