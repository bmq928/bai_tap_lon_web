const name = 'student';
const mongoose = require('mongoose');
const { Schema } = mongoose;
const PersonSchema = require('./baseSchema/PersonSchema');
const schema_extend = require('mongoose-schema-extend');

const studentSchema = PersonSchema.extend({

    //admin provide
    MSSV: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    birth: {type: Date, required: true},
    address: {type: String, required: true},
    classroom: {type: String, required: true},
    startYear: {type: Number, required: true},
    speciality: {type: String, required: true},
    // vnuMail : {type: String, required: true},
    averageGrade: {type: Number, default: 0},
    granduatedYear: {type: Number, required: true},

    //user manage 
    avatar: {type: String},
    privateEmail: {type: String},
    skypeID: {type: String},
    facebook: String,
    phoneNumber: {type: String, required: true},
    EnglishSkill: {type: String, default: 'tốt nghiệp THPT'},
    diploma: String,
    expreneced: Number,
    wantToBe: String, 
    note: String,

    //addition
    skills: {type: [String], default: []},
    lecturer: {type: Schema.Types.ObjectId}   
})


module.exports = mongoose.model(name, studentSchema);