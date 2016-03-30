var mongoose = require('mongoose');

var SoupSchema = new mongoose.Schema({
        title:String,
        image:String,
        itemid:Number,
        cost:Number
});

module.exports = mongoose.model('soup', SoupSchema);
