/**
 * Created by David on 2015-02-02.
 */
var path = require('path');
module.exports = function(app){
    //list all the routes.
    app.get('/',function(req,res){
        console.log('Request for index file');
        res.render('index');
    });
    app.get('/resume',function(req,res){
        console.log('Request for Resume.pdf');
        var file = "../"+__dirname + '/Resume - David Kong.pdf';
        res.download(file);
    })
};