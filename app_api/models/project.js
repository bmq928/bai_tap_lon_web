const name = 'project';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectSchema = new Schema({

    //current student on project
    students: { type: [Schema.Types.ObjectId], default: [] },
    partnerId: { type: Schema.Types.ObjectId, required: true },

    requiredSkills: { type: [String], required: true },
    name: { type: String, required: true }
})

module.exports = mongoose.model(name, ProjectSchema);