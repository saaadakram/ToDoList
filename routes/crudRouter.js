const express = require("express")
const router = express.Router()
const { createUser, getUser, updateUser, deleteUser} = require("../controller/crudController")

router.post("/createUser", createUser)
router.get("/getUser", getUser)
router.put("/updateUser", updateUser)
router.delete("/deleteUser", deleteUser)

module.exports = router