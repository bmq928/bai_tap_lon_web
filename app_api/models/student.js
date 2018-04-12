const name = 'student';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({

});

module.exports = mongoose.model(name, studentSchema);