const name = 'partner';
const mongoose = require('mongoose');
// const { Schema } = mongoose;
require('mongoose-schema-extend');
const PersonSchema = require('./baseSchema/PersonSchema');

const partnerSchema = PersonSchema.extend({
    
})

// const partnerSchema = new Schema({
//     username: {type: String, required: true},
//     password: {type: String, required: true}
// });

module.exports = mongoose.model(name, partnerSchema);