const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  hash: String,
  salt: String,
  city: String,
  state: String
});

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 512, 'sha512').toString('hex');
}

UserSchema.methods.validPassword = function (password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 512, 'sha512').toString('hex');
  return this.hash == hash;
}

UserSchema.methods.generateJWT = function () {
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    name: this.name,
    email: this.email,
    city: this.city,
    state: this.state,
    exp: parseInt(expiry.getTime() / 1000)
  }, process.env.SECRET);
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
