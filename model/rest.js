var mongoose = require('mongoose');

var RestSchema = new mongoose.Schema({
        title:String,
        image:String,
        itemid:Number,
        time:String,
        genre:Array
});

module.exports = mongoose.model('rest', RestSchema);
