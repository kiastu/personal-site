var express = require('express');
var router = express.Router();
/** Middleware **/
router.get('*', function(req, res, next) {
    console.log(new Date().toString(), "request for: ", req.url, " from ip: ", req.ip);
    next();
});

router.get('/', function(req, res) {
    res.render('index',{layout:false});
});

router.get('/resume', function(req, res) {
    var resumeUrl = 'https://drive.google.com/file/d/0B9DhAcb65Xt-OW0zQk9ISWIyTnM/view?usp=sharing';
    res.redirect(resumeUrl)
});

module.exports = router;