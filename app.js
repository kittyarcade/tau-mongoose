var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userRouter = require('./routes/userRouter');

app.use(bodyParser.json());

//router
app.use('/user', userRouter);

app.get('/test/:id?', function(req, res) {
  console.log( 'in test get route ');
  console.log('req.params -> ', req.params.id);
  console.log('req.query ->', req.query);
  res.sendStatus(200);
});

// http://localhost:3000/test?username=millie - query string
// http://localhost:3000/test/9192837 - url params

//tauUsersDatabase is the name of the database
mongoose.connect('mongodb://localhost:27017/tauUsersDatabase');

app.listen('3000', function() {
  console.log('listening on 3000');
});
