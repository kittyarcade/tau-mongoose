var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userRouter = require('./routes/userRouter');

app.use(bodyParser.json());

//router
app.use('/user', userRouter);

//tauUsersDatabase is the name of the database
mongoose.connect('mongodb://localhost:27017/tauUsersDatabase');

app.listen('3000', function() {
  console.log('listening on 3000');
});
