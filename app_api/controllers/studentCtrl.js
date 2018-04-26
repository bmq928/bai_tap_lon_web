const Student = require('../models/student');
const Project = require('../models/project');
const InternNotif = require('../models/internNotif');

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
                _id: { $in: projects.map(p => toObjectId(p)) },
                // _id: "5adecb5edcdd621678cc1e32"
            })
            // .select('name')
            .exec((err, resp) => {
                if (err) return res.status(400).json(err);

                res.status(200).json({
                    projects: resp.map(p => p.name),
                    skills
                })
            })

    })
}

const findNotif = (req, res) => {
    const { title, ownerId } = req.body;

    if (!title && !ownerId) return res.status(400).json({ message: ' title or owner must be filled' });

    if (!ownerId) {
        InternNotif
            .find({ title }, (err, notifs) => sendToClient(err, notifs))
    } else {

        let query = InternNotif.find({ ownerId });
        if (title) query = query.find({ title });

        query.exec((err, notifs) => sendToClient(err, notifs));

    }




    function sendToClient(err, notifs) {
        if (err) return res.status(400).json(err);

        if (!notifs || !notifs.length) return res.status(400).json({ message: 'no content founded' });

        return res.status(200).json({ notifs });
    }
}




module.exports = {
    getInfo,
    updateInfo,
    getSkill,
    findNotif
};



//helper
function toObjectId(str) {
    const ObjectId = require('mongoose').Types.ObjectId;

    return new ObjectId(str);
}