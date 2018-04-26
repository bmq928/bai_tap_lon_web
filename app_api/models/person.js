const Student = require('./student');
const Partner = require('./partner');
const Admin = require('./admin');
const Lecturer = require('./lecturer');
const TYPE = {
    Student: 'student',
    Partner: 'partner',
    Admin: 'admin',
    Lecturer: 'lecturer'
};



const findModel = function (type){
    switch (type) {
        case TYPE.Admin: return Admin;
        case TYPE.Lecturer: return Lecturer;
        case TYPE.Partner: return Partner;
        case TYPE.Student: return Student;
        default: throw new Error('type not found');
    };
}

const authenticate = async (mail, password, done) => {

    let hasUser = false;
    console.log(mail);
    console.log(password);

    await findUser(TYPE.Admin);
    await findUser(TYPE.Lecturer);
    await findUser(TYPE.Partner);
    await findUser(TYPE.Student);
    console.log(hasUser);


    if(!hasUser) done(null, false, {message: 'mail invalid'})

    // const promiseAll = promises => {
    //     return new Promise((resolve, reject) => {

    //         for (let i = 0; i < promises.length; ++i) {
    //             let cur = promises[i];


    //         }
    //     })
    // }

    async function findUser(type) {
        if (!hasUser) {
            console.log(type);
            let Model = findModel(type);
            let user = await Model.findOne({mail}).exec();

            if(user) {
                console.log(user);
                hasUser = true;
                user.comparePassword(password, (err, same) => {
                    if(err) return done(err);
                    if(!same) return done (null, false, {message: 'password invalid'});
                    
                    return done(null, user);
                })
            }
        }
    }

};

module.exports = { authenticate, findModel };