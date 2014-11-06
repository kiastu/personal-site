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

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//public directory serves static pages
app.use("/", express.static(__dirname + "/public/"));

//specify rendering folder
app.set('views', __dirname);

//set default templating engine;
app.set('view engine', 'jade');


var port = process.env.PORT || 9001; 		// set our port

// DATABASE SHENANINGANS
// =============================================================================

var username = "kiastu";
var password = "kong0427";
mongoose.connect("mongodb://"+username+":"+password+"@ds051630.mongolab.com:51630/kiastu_blog");
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var BlogPost = require('./models/blogpost.js');


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

// route middleware that will happen on every request
router.use(function (req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);
    console.log("Request received, processing.");

    // continue doing what we were doing and go to the route
    next();
});

router.route('/')
    .get(function (req, res) {
    res.render('views/index');
});

router.route('/posts/new')
    .post(function(req,res){
        var newPost = new BlogPost();
        newPost.title = req.body.name;
        newPost.content = req.body.content;
    });

router.route('/posts/:post_id')
    .get(function (req, res) {
        BlogPost
    });



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
