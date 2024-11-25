const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  userId: { type: String },
  title: { type: String },
  description: { type: String },
  completed: { type: Boolean },
  dueDate: { type: Date },
  completedAt: { type: Date }
})

const taskSchemaModal = mongoose.model('TaskSchemaModal', taskSchema);

module.exports = taskSchemaModal;