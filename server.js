/**
 * Created by kiastu on 05/11/14.
 */
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); 		// call express
var app = express(); 				// define our app using express
var bodyParser = require('body-parser');
var jade = require('jade');
var mongoose = require('mongoose');
var path = require('path');//this is used to join the public directory
var compression = require('compression');
var methodOverride = require('method-override');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//public directory serves public pages
app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride());
app.use(compression());


//specify rendering folder
app.set('views', __dirname + '/views');

//set default templating engine;
app.set('view engine', 'jade');


var port = process.env.PORT || 80; 		// set our port

// DATABASE SHENANINGANS
// =============================================================================

var username = "kiastu";
var password = "kong0427";
mongoose.connect("mongodb://" + username + ":" + password + "@ds051630.mongolab.com:51630/kiastu_blog");
var BlogPost = require('./models/blogpost.js');


// ROUTES FOR OUR API
// =============================================================================
// route middleware that will happen on every request
//router.use(function (req, res, next) {
//
//    // log each request to the console
//    console.log(req.method, req.url);
//    console.log("Request received, processing.");
//
//    // continue doing what we were doing and go to the route
//    next();
//});

//router.route('/')
//    .get(function (req, res) {
//        /*var posts = BlogPost.find().sort('-date').limit(5).exec(function(err,posts){
//         if(err)
//         res.send(err);
//         else{
//         res.render('./views/index',{postData: posts});
//         }
//
//         });
//         */
//        res.send();
//    });


// REGISTER OUR ROUTES -------------------------------
//path joins the dir, then we can navigate out in to views folder.

require('./routes/routes')(app);
require('./routes/api')(app);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
