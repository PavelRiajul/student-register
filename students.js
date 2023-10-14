const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
  address: String,
  roll: String,
  class: String,
});

const StudentsModel = mongoose.model('Student', studentSchema);

module.exports = StudentsModel;
