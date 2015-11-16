var express = require('express');
var router = express.Router();
var socketIO = require('socket.io');
var json = require('../list.json');
var nameList = [];
var imageList = [];
var urlList = [];
var captionList = [];
for(var i = 0; i < Object.keys(json.movieList).length; i++){
    nameList.push(json.movieList[i].name);
    imageList.push(json.movieList[i].image);
    urlList.push(json.movieList[i].url);
    captionList.push(json.movieList[i].caption);
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'contoroller'
  });
});
router.get('/page1', function(req, res, next){
    res.render('top_parts', {
        title:    'page1',
        names:    nameList,
        images:   imageList,
        urls:     urlList,
        captions: captionList
    });
})
router.get('/page2', function(req, res, next){
    res.render('top_parts', {
        title: 'page2',
        names:    nameList,
        images:   imageList,
        urls:     urlList,
        captions: captionList
    });
})
router.get('/page3', function(req, res, next){
    res.render('top_parts', {
        title: 'page3',
        names:    nameList,
        images:   imageList,
        urls:     urlList,
        captions: captionList
    });
})

module.exports = router;
