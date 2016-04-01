var mongoose = require('mongoose');

var RegisterSchema = new mongoose.Schema({
  name: String,
  email:String,
  number: Number
});

module.exports = mongoose.model('register', RegisterSchema);
