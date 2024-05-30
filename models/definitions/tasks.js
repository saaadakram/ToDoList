const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const users = require("./users");

class tasks extends Model {}

tasks.init(
  {
    taskId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    taskName: {
      allowNull: false,
      type: DataTypes.STRING(34),
    },
    taskInfo: {
      allowNull: true,
      type: DataTypes.STRING(1000),
    },
    userId: {
      allowNull: false,
      type: DataTypes.STRING(500),
      references: {
        model: users,
        key: "userId",
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "tasks",
    sequelize,
  }
);

module.exports = tasks;
