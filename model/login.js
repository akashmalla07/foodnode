var mongoose = require('mongoose');

var LoginSchema = new mongoose.Schema({
  name: String,
  email:String,
  number: Number
});

module.exports = mongoose.model('login', LoginSchema);
