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
var serveStatic = require('serve-static');

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

// No shenanigans right now.

// REGISTER OUR ROUTES -------------------------------
//path joins the dir, then we can navigate out in to views folder.

app.get('*',function(req,res,next){
    next();
});
app.use('/experiments/800Squadron/',serveStatic(__dirname +'/experiments/800Squadron'));

app.use('/',require('./routes/routes'));
require('./routes/api')(app);

//serve 800Squadron pages



// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
