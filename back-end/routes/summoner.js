var express = require('express');
var path = require('path');
var router = express.Router();

router.post('/', function(req, res, next) {
    const { nick_name } = req.body;
    res.redirect('/summoner/score/' + nick_name);
});

router.get('/score/:nick_name', function(req, res, next) {
    // res.sendFile(path.join(__dirname, '../public/bundle/dist', 'index.html'))
    res.sendFile(path.join(__dirname, '../public/bundle', 'index.html'))
});

module.exports = router;