const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controller/customerController");

router.get("/signUp", signUp);
router.get("/signIn", signIn);

module.exports = router;
