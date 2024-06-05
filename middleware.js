require("dotenv").config();
const { verify } = require("jsonwebtoken");

module.exports = {
  middleware: async (req, res, next) => {
    try {
      const token = req.cookies.auth;
      if (token === "undefined") {
        return res.send({
          response: "unauthorized",
        });
      }

      await verify(token, process.env.SECRET, (error, data) => {
        console.log("dataaaaaaaaaaaaaaaa", data);
        if (error) {
          return res.send({
            response: "forbidden access",
          });
        }
        req.userData = data;
        next();
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
