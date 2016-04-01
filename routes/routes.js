
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var login = require('../model/login.js');
var rest = require('../model/rest.js');
var soup = require('../model/soup.js');
var starter = require('../model/starter.js');
var maincourse = require('../model/maincourse.js');
var dessert = require('../model/dessert.js');
//var register = require('../model/register.js');


router.post('/login', function(req, res) {
 console.log("i am going to login");
  console.log(req.body);
  var s = req.body.name;
  login.findOne({'name':s},function(err,doc){
  console.log(doc);
 res.json(doc);
 });

});


router.post('/register', function(req, res) {
 console.log("i am going to register");
  console.log(req.body);
 /* var s = req.body.name;
  login.findOne({'name':s},function(err,doc){
  console.log(doc);
 res.json(doc);
 });
*/
  login.insert(req.body, function(err, doc) {
    res.json(doc);
    console.log(doc)
  });
});

router.get('/rest', function(req, res) {
 console.log("i am going to fetch the rest");
  //console.log(req.body);
  //var s = req.body.name;
 rest.find({},function(err,doc){
  console.log(doc);
 res.json(doc);
 });
});

router.get('/soup', function(req, res) {
 console.log("i am going to fetch the soup");
  //console.log(req.body);
  //var s = req.body.name;
 soup.find({},function(err,doc){
  console.log(doc);
 res.json(doc);
 });
});

router.get('/starter', function(req, res) {
 console.log("i am going to fetch the starter");
  //console.log(req.body);
  //var s = req.body.name;
 starter.find({},function(err,doc){
  console.log(doc);
 res.json(doc);
 });
});

router.get('/maincourse', function(req, res) {
 console.log("i am going to fetch the maincourse");
  //console.log(req.body);
  //var s = req.body.name;
 maincourse.find({},function(err,doc){
  console.log(doc);
 res.json(doc);
 });
});

router.get('/dessert', function(req, res) {
 console.log("i am going to fetch the desert");
  //console.log(req.body);
  //var s = req.body.name;
 dessert.find({},function(err,doc){
  console.log(doc);
 res.json(doc);
 });
});

module.exports = router;
