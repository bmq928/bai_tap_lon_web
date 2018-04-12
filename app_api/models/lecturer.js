const name = 'lecturer';
const mongoose = require('mongoose');
const { Schema } = mongoose;
const util = require('util');

const lecturerSchema = new Schema({

});

module.exports = mongoose.model(name, lecturerSchema);