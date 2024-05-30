const sequelize = require("../bin/dbConnection");
const users = require("./definitions/users");
const tasks = require("./definitions/tasks");

const models = { users, tasks };

//relations

users.hasMany(tasks, { foreignKey: "userId" });
tasks.belongsTo(users, { foreignKey: "userId" });

const db = {};
db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
