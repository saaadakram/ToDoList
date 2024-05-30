const { models } = require("./index");

module.exports = {
  createTask: async (body) => {
    try {
      const task = await models.tasks.create({ ...body });
      return {
        response: task,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getTask: async (taskId, taskName) => {
    try {
      const task = await models.tasks.findOne({
        ...(taskId
          ? { where: { taskId: taskId } }
          : { where: { taskName: taskName } }),
      });
      return {
        response: task,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getAllTasks: async () => {
    try {
      const task = await models.tasks.findAll({
        attributes: ["taskId", "taskName", "taskInfo"],
      });
      return {
        response: task,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteTask: async (taskId) => {
    try {
      const deleteTask = await models.tasks.destroy({
        where: { taskId: taskId },
      });
      return {
        response: deleteTask,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  updateTask: async (taskId, ...body) => {
    try {
      const updatedTask = await models.tasks.update(
        { ...body },
        {
          where: {
            taskId: taskId,
          },
        }
      );
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
