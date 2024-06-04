//const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
const taskModel = require("../models/taskModel");

module.exports = {
  createTask: async (body) => {
    try {
      body.taskId = uuid();
      const task = await taskModel.createTask(body);

      if (task.error) {
        return {
          error: task.error,
        };
      }
      return {
        response: task.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getAllTasks: async () => {
    try {
      const task = await taskModel.getAllTasks();
      if (task.error) {
        return {
          error: "No task existed",
        };
      }
      return {
        response: task.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteTask: async (taskId) => {
    try {
      const deleteTask = await taskModel.deleteTask(taskId);
      if (deleteTask.error || !deleteTask.response) {
        return {
          error: {
            message: "Unable to delete task",
            error: deleteTask?.error || deleteTask.response,
          },
        };
      }
      return {
        response: {
          message: "task deleted",
          response: deleteTask.response,
        },
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
