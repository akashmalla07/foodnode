var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port  	 = process.env.PORT || 3000; 				// set the port
var database = require('./config/database'); 			// load the database config
var routes = require('./routes/routes'); 			// load the database config
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var methodOverride = require('method-override');

//var routes = require('./routes/index');
var routes= require('./routes/routes');

// configuration ===============================================================
//mongoose.connect(database.url); 	
mongoose.connect(database.url, function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login',routes);//for submit button 
app.get('/rest',routes);//for submit button 
app.get('/soup',routes);
app.get('/starter',routes);
app.get('/maincourse',routes);
app.get('/dessert',routes);
// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
