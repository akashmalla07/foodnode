var mongoose = require('mongoose');

var StarterSchema = new mongoose.Schema({
        title:String,
        image:String,
        itemid:Number,
        cost:Number
});

module.exports = mongoose.model('starter', StarterSchema);
