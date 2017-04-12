const express = require('express');
const mongoose = require('mongoose');
const User = require('./userModel');
const crypto = require('crypto');
const jwt = require('express-jwt');
const passport= require('passport');

const authCheck = jwt({
  secret: process.env.SECRET
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
    console.log(err, user, info);
    // if passport sends error
    if (err) {
      res.status(404).json(err);
    }

    // if user found
    if (user) {
      const token = user.generateJWT();
      const t = {'token': token};
      res.send(t);
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res)
})

module.exports = router;
