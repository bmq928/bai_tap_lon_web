const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('../models/baseSchema/PersonSchema');

passport.use(new LocalStrategy({
    usernameField: 'mail',
    passwordField: 'password'
}, (mail, password, done) => {

}))