const express = require("express");
const router = express.Router();
const {
  createTask,
  getTask,
  getAllTasks,
  deleteTask,
} = require("../controller/taskController");

router.get("/getTask", getTask);
router.get("/getAllTasks", getAllTasks);
router.post("/createTask", createTask);
router.delete("/deleteTask", deleteTask);
module.exports = router;
