const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./userModel');
const passport= require('passport');
require('./passport');

const port = process.env.PORT || 3000;

const connect = process.env.MONGODB_URI || "mongodb://localhost/bookClub"

//plug in promise liblary
mongoose.Promise = global.Promise;

mongoose.connect(connect);
mongoose.connection.on('connected', () => console.log('connected to db'))

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(passport.initialize());

//setting the routes
const api = require('./api')
app.use('/api', api);

//redirect to angulr all the routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(port, () => {
  console.log('Server listening on port', port)
})
