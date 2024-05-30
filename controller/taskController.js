const joi = require("joi");
const taskService = require("../services/taskService");
const createTaskSchema = joi.object().keys({
  taskName: joi.string().min(5).max(20).required(),
  taskInfo: joi.string(),
  userId: joi.string().length(36).required(),
});

const getTaskSchema = joi.object().keys({
  taskName: joi.string().min(5).max(20).required(),
});

const deleteTaskSchema = joi.object().keys({
  taskId: joi.string().required(),
});

module.exports = {
  createTask: async (req, res) => {
    try {
      const taskValidate = await createTaskSchema.validateAsync(req.body);
      const task = await taskService.createTask(taskValidate);
      if (task.error) {
        return res.send({
          error: task.error,
        });
      }
      return res.send({
        response: task,
      });
    } catch (error) {
      return res.send({ message: error.message });
    }
  },
  getTask: async (req, res) => {
    try {
      const taskValidate = await getTaskSchema.validateAsync(req.body);
      const task = await taskService.getUser(taskValidate);
      if (task.error) {
        return res.send({
          error: task.error,
        });
      }
    } catch (error) {
      return res.send({ message: error.message });
    }
  },

  getAllTasks: async (req, res) => {
    try {
      const task = await taskService.getAllTasks();
      if (task.error) {
        return res.send({
          error: task.error,
        });
      }
      return res.send({
        response: task.response,
      });
    } catch (error) {
      return res.send({ message: error.message });
    }
  },
  deleteTask: async (req, res) => {
    try {
      const validate = await deleteTaskSchema.validateAsync(req.query);
      const deleteTask = await taskService.deleteTask(validate.taskId);
      if (deleteTask.error) {
        return res.send({
          error: deleteTask.error,
        });
      }
      return res.send({
        response: deleteTask.response,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },
};
