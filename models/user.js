var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  username: {type: String, unique: true},
  admin: Boolean,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date
});

// 1st param is the name of the collection
// 2nd param is the Schema defined above
// WARNING: mongoose will lowercase and pluralize collection name
var User = mongoose.model('users', userSchema);

module.exports = User;
