const route = require('express').Router();
const Admin = require('../models/admin');

route.get('/', (req, res) => res.send('api success'));

// route.get('/test', (req, res) => {
//     let a = new Admin();
//     let tes = a.generatePassword();

    

//     res.send(`${tes} fkalsdjfl`);
// })

module.exports = route;