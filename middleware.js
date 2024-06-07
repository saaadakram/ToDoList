require("dotenv").config();
const { verify } = require("jsonwebtoken");

module.exports = {
  middleware: async (req, res, next) => {
    try {
      console.log(req.cookies, "===========cookies");
      const token = req.cookies.auth;
      if (token === "undefined") {
        return res.send({
          response: "unauthorized",
        });
      }

      verify(token, process.env.SECRET, (error, data) => {
        if (error) {
          return res.send({
            response: "forbidden access",
          });
        }
        req.userData = data;
        next();
      });
    } catch (error) {
      console.log(error, "error");
      return res.send({
        error: error,
      });
    }
  },
};
