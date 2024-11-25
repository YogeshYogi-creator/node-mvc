const { registerUser } = require('./userService');
const { getAllTasks, createTask, getTaskById, updateTask, deleteTask } = require('./taskService');

module.exports = { registerUser, getAllTasks, createTask, getTaskById, updateTask, deleteTask };