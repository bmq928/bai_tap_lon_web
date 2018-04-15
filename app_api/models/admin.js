const name = 'admin';
const mongoose = require('mongoose');
const PersonSchema = require('./baseSchema/PersonSchema');
const schema_extend = require('mongoose-schema-extend');


const adminSchema = PersonSchema.extend({
    
})

module.exports = mongoose.model(name, adminSchema);