const name = 'lecturer';
const mongoose = require('mongoose');
// const { Schema } = mongoose;
// const util = require('util');
require('mongoose-schema-extend');
const PersonSchema = require('./baseSchema/PersonSchema');

const lecturerSchema = PersonSchema.extend({
    
});

module.exports = mongoose.model(name, lecturerSchema);