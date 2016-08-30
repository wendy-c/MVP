//set up server
var express = require('express');
//var mongoose = require('mongoose');
//var likedController = require('./liked/likedController');

//middleware
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());
app.use(express.static('./client'));

//route request
//app.setHeaders('Access-Control-Allow-Origin', '*');

app.get('/liked', function(req, res) {
  res.send();
});

app.post('/liked', function(req, res) {
  res.status(200);
});
// app.post('/signup', userController.signup);
// app.post('/signin', userController.signin);

//helpers

app.listen(3000, function() {
  console.log("listening to port 3000!");
});
