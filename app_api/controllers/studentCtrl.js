const Student = require('../models/student');


const getInfo = (req, res) => {
    const { mail } = req.payload;

    //just to make sure
    //but perhaps this line will never be invorked
    if (!mail) return res.status(400).json({ message: 'mail is required' })



    Student.findOne({ mail }, (err, student) => {
        if (err) return res.status(400).json(err);
        if (!student) return res.status(400).json({ message: 'student is not found' });

        const { MSSV,
            name,
            birth,
            address,
            classroom,
            startYear,
            speciality,
            // vnuMail : {type: String, required: true},
            averageGrade,
            granduatedYear,

            //user manage 
            avatar,
            privateEmail,
            skypeID,
            facebook,
            phoneNumber,
            EnglishSkill,
            diploma,
            expreneced,
            wantToBe,
            note }  = student;

        res.status(200).json({ MSSV,
            name,
            birth,
            address,
            classroom,
            startYear,
            speciality,
            // vnuMail : {type: String, required: true},
            averageGrade,
            granduatedYear,

            //user manage 
            avatar,
            privateEmail,
            skypeID,
            facebook,
            phoneNumber,
            EnglishSkill,
            diploma,
            expreneced,
            wantToBe,
            note })
    })
}

module.exports = { getInfo };