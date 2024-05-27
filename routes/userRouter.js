const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  getAllUsers,
  deleteUser,
} = require("../controller/userController");

router.get("/getUser", getUser);
router.get("/getAllUsers", getAllUsers);
router.post("/createUser", createUser);
router.delete("/deleteUser", deleteUser);
module.exports = router;
