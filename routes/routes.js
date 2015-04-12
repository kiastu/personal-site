/**
 * Created by David on 2015-02-02.
 */
module.exports = function(){
    var path = require('path');
    var express = require('express');
    var app = express();
    //list all the routes.
    app.get('/',function(req,res){
        console.log('Request for index file');
        res.render('index');
    });
    app.get('/resume',function(req,res){
        console.log('Request for Resume.pdf');
        var file = __dirname + '/Resume - David Kong.pdf';
        res.download(file);
    });
    app.get('/experiments',function(req,res){
        console.log('Request for experiments page');
        
    }
    //serve 800Squadron pages
    app.use('/experiments/800Squadron',express.static(path.join(__dirname, '/experiments/800Squadron')));

    return app;
}();