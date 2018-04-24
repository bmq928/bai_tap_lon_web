const Student = require('../models/student');
const Project = require('../models/project');


const getInfo = (req, res) => {
    const { mail } = req.payload;

    //just to make sure
    //but perhaps this line will never be invorked
    if (!mail) return res.status(400).json({ message: 'mail is required' });



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
            note } = student;

        res.status(200).json({
            MSSV,
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
            note
        })
    })
}

const updateInfo = (req, res) => {
    const { mail } = req.payload;

    //just to make sure
    //but perhaps this line will never be invorked
    if (!mail) return res.status(400).json({ message: 'mail is required' });
    const {
        avatar,
        privateEmail,
        skypeID,
        facebook,
        phoneNumber,
        EnglishSkill,
        diploma,
        expreneced,
        wantToBe,
        note,
        // skills
    } = req.body;

    if (!avatar) return res.status(400).json({ message: 'avatar missed' });
    if (!privateEmail) return res.status(400).json({ message: 'privateEmail missed' });
    if (!skypeID) return res.status(400).json({ message: 'skypeID missed' });
    if (!facebook) return res.status(400).json({ message: 'facebook missed' });
    if (!phoneNumber) return res.status(400).json({ message: 'phoneNumber missed' });
    if (!EnglishSkill) return res.status(400).json({ message: 'EnglishSkill missed' });
    if (!diploma) return res.status(400).json({ message: 'diploma missed' });
    if (!expreneced) return res.status(400).json({ message: 'expreneced missed' });
    if (!wantToBe) return res.status(400).json({ message: 'wantToBe missed' });
    if (!note) return res.status(400).json({ message: 'note missed' });
    // if (!skills) return res.status(400).json({ message: 'skills missed' });

    Student.findOne({ mail }, (err, student) => {

        student.avatar = avatar;
        student.privateEmail = privateEmail;
        student.skypeID = skypeID;
        student.facebook = facebook;
        student.phoneNumber = phoneNumber;
        student.EnglishSkill = EnglishSkill;
        student.diploma = diploma;
        student.expreneced = expreneced;
        student.wantToBe = wantToBe;
        student.note = note;
        // student.skills = skills;



        student.save(err => {
            if (err) return res.status(400).json(err);

            return res.status(200).json({ message: 'update sucess' });
        })
    })
}

const getSkill = (req, res) => {
    const { mail } = req.payload;

    Student.findOne({ mail }, (err, student) => {
        if (err) return res.status(400).json(err);

        const { skills, projects } = student;
        Project
            .find({
                "_id": { $in: projects }
            })
            .select('name')
            .exec((err, resp) => {
                if(err) return res.status(400).json(err);

                res.status(200).json({
                    projects: resp.name,
                    skills
                })
            })

    })
}

module.exports = {
    getInfo,
    updateInfo,
    getSkill
};