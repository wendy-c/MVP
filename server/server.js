//set up server
var express = require('express');
var request = require('request');
var mongoose = require('mongoose');
var likedController = require('./liked/likedController');

//middleware
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/test');

app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());
app.use(express.static('./client'));

//route request
app.get('/gettoken', function(req, res){
  //console.log('being called?', req)
  request.get('http://api.petfinder.com/auth.getToken')
    .on('response', function(response) {
        console.log(response.statusCode) // 200
        console.log(response.headers['content-type']) 
        res.end();
      })
    .on('error', function(err) {
        console.log(err)
      });
});


app.get('/getpets', function(req, res) {
  var body = '';
  console.log('REQUEST', req.body);
  request.get('http://api.petfinder.com/pet.find')
    .on('data', function(chunk) {
        // console.log(response.statusCode) // 200
        // console.log(response.headers['content-type']) 
        body += chunk;
        console.log("getpets body---------->",req.body);
      })
    .on('end', function() {
      // console.log(body);
    })
    .on('error', function(err) {
        console.log(err)
      });
});


app.get('/liked', function(req, res) {
  res.send();
});

app.post('/liked', likedController.sendLikes);


app.listen(3000, function() {
  console.log("listening to port 3000!");
});
