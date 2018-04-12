const name = 'person';
const mongoose = require('mongoose');
const { Schema } = mongoose;
// const util = require('util');

// const PersonSchema = function () {
//     Schema.apply(this, arguments);

//     this.add({
//         username: {type: String, required: true, default: 'nah00'},
//         password: {type: String, required: true},

//         contact: {
//             name: {type: String, required: true},
//             birth: {type: Date, required: true},
//             hometown: {type: String, required: true}
//         }
//     })
// }

// util.inherits(PersonSchema, Schema);

// PersonSchema.plugin = (new Schema()).plugin.bind(PersonSchema);

// PersonSchema.plugin((schema, options) => {
//     schema.methods.generatePassword = function(){
//         return 'extend method successs';
//     }
// })

// PersonSchema.methods.generatePassword = function(){
//     return 'passwords';
// }


const PersonSchema = new Schema({
    username: { type: String, required: true, default: 'nah00' },
    password: { type: String, required: true },

    contact: {
        name: { type: String, required: true },
        birth: { type: Date, required: true },
        hometown: { type: String, required: true }
    }

}, { discriminatorKey: '_type' });

PersonSchema.methods.generatePassword = function () {
    return 'password';
}


module.exports = PersonSchema;