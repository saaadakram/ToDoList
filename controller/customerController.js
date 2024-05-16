module.exports = {
  signUp: (req, res) => {
    return res.send({
      message: "Sign up completed",
    });
  },
  signIn: (req, res) => {
    return res.send({
      message: "Sign in completed",
    });
  },
};
