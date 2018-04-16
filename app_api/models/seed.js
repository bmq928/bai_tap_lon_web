const Student = require('./student');
const {Schema} = require('mongoose');

const students = [
    {
        mail: 'firstStd@gmail.com',
        password: 'somepass',
        //admin provide
        MSSV: 'dfadsf',
        name: 'nah bar sa',
        birth: new Date(2017, 1, 1),
        address: 'Mars',
        classroom: 'K61-CLC',
        startYear: 2015,
        speciality: 'nah',
        // vnuMail : {type: String, required: true},
        averageGrade: 6.789,
        granduatedYear: 2020,
    
        //user manage 
        privateEmail: 'lkfsadjlkfj',
        phoneNumber: '342-324-234'
    }
]

Student.count({}, (err, count) => {
    console.log(count);
    if(!count) Student.create(students);
})