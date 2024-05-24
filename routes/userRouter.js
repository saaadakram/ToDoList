const express = require("express");
const router = express.Router();
const { createUser, getUser } = require("../controller/userController");

router.get("/getUser", getUser);
router.post("/createUser", createUser);
module.exports = router;
