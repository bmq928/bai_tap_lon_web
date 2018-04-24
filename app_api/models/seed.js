const Student = require('./student');
const Project = require('./project');
const Partner = require('./partner');
// const { Schema } = require('mongoose');

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
        phoneNumber: '342-324-234',
        skills: ['html', 'pascal']
    }
]

const projects = [
    {
        name: 'sdlkafj',
        requiredSkills: ['html', 'css']
    }
]

const partners = [{
    mail: 'pa@gmail.com',
    password: 'somepass',
    name: 'nah'
}]

createSeed();

// Student.count({}, (err, count) => {
//     console.log(count);
//     if (!count) Student.create(students);
// })


// Partner.count({}, (err, count) => {
//     if (!count) Partner.create(partners, (err, docs) => {

//         Project.count({}, (err, count) => {
//             if (!count) Project.create(projects.map(p => {
//                 return {
//                     ...p,
//                     partnerId: docs[0]._id
//                 }
//             }));
//         })


//     });
// })


async function createSeed() {
    await console.log('parnter');
    let count = await Partner.count({}).exec();

    if (!count) {
        await Partner.create(partners);
        let _partners = await Partner.find({}).exec();

        for (let i = 0; i < projects.length; ++i) {
            projects[i].partnerId = _partners[0]._id;
        }
        await Project.create(projects);
        let _projects = await Project.find({}).exec();




        for (let i = 0; i < students.length; ++i) {
            students[i].projects = [_projects[0]._id];
        }

        await Student.create(students);
        let _students = await Student.find({}).exec();

        _students.forEach(s => {
            _projects[0].students.push(s._id);
        })

        await Project.create(_projects);
    }

}
