const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  title: { type: String, required: true },
  classNote: String,
  description: String,
  status: String,
  email: { type: String, required: true },
});

const WorksModel = mongoose.model('Work', workSchema);

module.exports = WorksModel;
