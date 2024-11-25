const taskService = require('../service/taskService');

const taskController = {};

taskController.welcome = (req, res) => {
  res.json('Welcome');
};

taskController.list = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

taskController.create = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    res.json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

taskController.show = async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

taskController.update = async (req, res) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    res.json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

taskController.delete = async (req, res) => {
  try {
    const task = await taskService.deleteTask(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = taskController;
