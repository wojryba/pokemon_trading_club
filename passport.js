var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
const User = require('./userModel');

passport.use(new LocalStrategy({
  usernameField : 'Email',
  passwordField : 'Password'
},
function (username, password, done) {
  User.findOne({email: username}, function(err, user) {
    if (err) {
      return done(err);
    };
    if (!user) {
      return done(null, false, {
        message: 'User not found!'
      });
    };
    if (!user.validPassword(password)) {
      return done(null, false, {
        message: 'Wrong password!'
      });
    }

    return done(null, user);
  })
}))
