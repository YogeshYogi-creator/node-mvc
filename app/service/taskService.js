const taskSchemaModal = require('../models/taskModal');

const getAllTasks = async () => {
  try {
    return await taskSchemaModal.find();
  } catch (error) {
    throw error;
  }
};

const createTask = async (taskData) => {
  try {
    const task = new taskSchemaModal(taskData);
    return await task.save();
  } catch (error) {
    throw error;
  }
};

const getTaskById = async (id) => {
  try {
    return await taskSchemaModal.findById(id);
  } catch (error) {
    throw error;
  }
};

const updateTask = async (id, taskData) => {
  try {
    return await taskSchemaModal.findByIdAndUpdate(id, taskData, { new: true, runValidators: true });
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (id) => {
  try {
    return await taskSchemaModal.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
