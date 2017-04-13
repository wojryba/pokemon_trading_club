const express = require('express');
const mongoose = require('mongoose');
const User = require('./userModel');
const crypto = require('crypto');
const jwt = require('express-jwt');
const passport= require('passport');
require('dotenv').config();
const jwt2 = require('jsonwebtoken');

const authCheck = jwt({
  secret: process.env.SECRET,
  // to make sure the token is recived properly
  getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      let token = req.headers.authorization.split(' ')[1];
      token = token.slice(1, token.length - 1);
        return token
    }
  }
})



const router = express.Router();

router.post('/register', (req, res) => {
  let user = new User();

  user.name = req.body.user.Name;
  user.email = req.body.user.Email;
  user.setPassword(req.body.user.Password);


  user.save(err => {
    if (err) {
      return res.send(err);
    }
    const token = user.generateJWT();
    const t = {'token': token};
    res.send(t);
  });
})

router.post('/login', (req, res) => {
  req.body = req.body.user;
  passport.authenticate('local', function(err, user, info) {
    // if passport sends error
    if (err) {
      res.status(404).json(err);
    }

    // if user found
    if (user) {
      const token = user.generateJWT();
      const t = {
        'token': token
      };
      res.send(t);
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res)
})

router.post('/profile', authCheck, (req, res) => {
  User.findOne({_id: req.user._id}, (err, user) => {
    if (err) console.log(err);
    user.city = req.body.profile.city;
    user.state = req.body.profile.state;
    user.save().then( () => {
      const token = user.generateJWT();
      const t = {'token': token};
      res.send(t);
    });
  });
})

router.post('/password', authCheck, (req, res) => {
  User.findOne({_id: req.user._id}, (err, user) => {
    if(user.validPassword(req.body.pass.currentPassword)){
      user.setPassword(req.body.pass.newPassword);
      user.save();
      res.send('password changed');
    } else {
      return res.send('wrong password');
    }

  });
})


module.exports = router;
