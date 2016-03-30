var mongoose = require('mongoose');

var DessertSchema = new mongoose.Schema({
        title:String,
        image:String,
        itemid:Number,
        cost:Number,
        genre:Array
});

module.exports = mongoose.model('dessert', DessertSchema);
