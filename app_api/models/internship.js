const name = 'internship';
const mongoose = require("mongoose");
const {Schema} = mongoose;

const internshipSchema = new Schema({
    requiredSkills: {type: [String], required: true},
    startTime: {type: Date, required: true}
})