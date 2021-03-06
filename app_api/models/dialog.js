const mongoose = require('mongoose');
const { Schema } = mongoose;
const name = 'dialog';

const dialogSchema = new Schema({
    sender: {type: Schema.Types.ObjectId, required : true},
    receiver: {type: Schema.Types.ObjectId, required: true},
    content: {type: String, default: ''}
});

module.exports = mongoose.model(name, dialogSchema);