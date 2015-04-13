/**
 * Created by David on 2015-02-02.
 */
module.exports = function(){
    var path = require('path');    
    var express = require('express');
    var app = express();
    //list all the routes.
    app.get('*',function(req,res,next){
        console.log("At ",new Date().toString(),"request for: ",req.url, " from ip: ",req.ip);
        next();

    })
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
        res.render('experiments');
    });
    

    return app;
}();