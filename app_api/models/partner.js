const name = 'partner';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const partnerSchema = new Schema({

});

module.exports = mongoose.model(name, partnerSchema);