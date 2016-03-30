var mongoose = require('mongoose');

var MaincourseSchema = new mongoose.Schema({
        title:String,
        image:String,
        itemid:Number,
        cost:Number
});

module.exports = mongoose.model('maincourse', MaincourseSchema);
