var express = require('express');
var router = express.Router();
var socketIO = require('socket.io');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'contoroller'
  });
});
router.get('/page1', function(req, res, next){
    res.render('top_parts', {
        title: 'page1'
    });
})
router.get('/page2', function(req, res, next){
    res.render('top_parts', {
        title: 'page2'
    });
})
router.get('/page3', function(req, res, next){
    res.render('top_parts', {
        title: 'page3'
    });
})

module.exports = router;
