const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const users = require("./users");

class sessions extends Model {}

sessions.init(
  {
    sessionId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    token: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(1000),
    },
    userId: {
      allowNull: false,
      type: DataTypes.STRING(500),
      unique: true,
      references: {
        model: users,
        key: "userId",
      },
    },
  },
  {
    tableName: "sessions",
    sequelize,
  }
);

module.exports = sessions;
