
// TODO: Sassify the css.
// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); 		// call express
var app = express(); 				// define our app using express
var bodyParser = require('body-parser');
var handlebars  = require('express-handlebars');
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
app.use(express.static(path.join(__dirname,'/bower_components')));
app.use(methodOverride());
app.use(compression());


//specify rendering folder
app.set('views', __dirname + '/views');

//set default templating engine
// Now that I think about it, probably not necessary, but I'll leave it here for now.
app.engine('.hbs', handlebars({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

var port = process.env.PORT || 9999; 		// set our port

// DATABASE SHENANINGANS
// =============================================================================

// No shenanigans right now.

// REGISTER OUR ROUTES -------------------------------
//path joins the dir, then we can navigate out in to views folder.

app.get('*',function(req,res,next){
    next();
});

var routes = require('./routes/routes');

app.use('/', routes);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server running on port ' + port);
