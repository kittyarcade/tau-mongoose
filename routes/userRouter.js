var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

router.get('/', function(req, res) {
  // find all
  User.find({}, function(err, userResults) { // could be further limited for ex. username: 'millie11'
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('users -> ', userResults);
      res.send(userResults);
    }
  });
});

router.post('/', function(req, res) {
  console.log('in post user route');
  console.log('req.body', req.body);
  var sentData = req.body;

  var newUser = new User({
    name: sentData.firstName, // Millie
    username: sentData.userName, // millie11
    admin: sentData.admin
  });

  newUser.save(function(err) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else {
      console.log('new user created');
      res.sendStatus(201);
    }
  });
});

module.exports = router;
