var express = require('express');
var router = express.Router();

router.get('/page1', function(req, res, next) {
    res.render('movie_show', {
        title: 'page1'
    });
});
router.get('/page2', function(req, res, next) {
    res.render('movie_show', {
        title: 'page2'
    });
});
router.get('/page3', function(req, res, next) {
    res.render('movie_show', {
        title: 'page3'
    });
});

module.exports = router;
