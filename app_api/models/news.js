const name = 'news';
const mongoose = require("mongoose");
const {Schema} = mongoose;

const newsSchema = new Schema({
    time: {type: Date, default: new Date()},
    content: {type: String, default: ''}
})

module.exports = mongoose.model(name, newsSchema);