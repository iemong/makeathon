var express = require('express');
var router = express.Router();
var socketIO = require('socket.io');

/*-----------------------------------
    json処理
-----------------------------------*/
var json = require('../list.json');
var nameList = [];
var imageList = [];
var urlList = [];
var captionList = [];
var imageNumList = [];
for(var i = 0; i < Object.keys(json.movieList).length; i++){
    nameList.push(json.movieList[i].name);
    imageList.push(json.movieList[i].image);
    urlList.push(json.movieList[i].url);
    captionList.push(json.movieList[i].caption);
    imageNumList.push(json.movieList[i].imageNum);
}

/* GET home page. */

var items = 5;
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'contoroller',
      number: items
  });
});
router.get('/page0', function(req, res, next){
    res.render('top_parts', {
        title:     'page0',
        names:     nameList,
        images:    imageList,
        imageNums: imageNumList,
        urls:      urlList,
        captions:  captionList
    });
})
router.get('/page1', function(req, res, next){
    res.render('top_parts', {
        title:     'page1',
        names:     nameList,
        images:    imageList,
        imageNums: imageNumList,
        urls:      urlList,
        captions:  captionList
    });
})
router.get('/page2', function(req, res, next){
    res.render('top_parts', {
        title:     'page2',
        names:     nameList,
        images:    imageList,
        imageNums: imageNumList,
        urls:      urlList,
        captions:  captionList
    });
})
router.get('/page3', function(req, res, next){
    res.render('top_parts', {
        title:     'page3',
        names:     nameList,
        images:    imageList,
        imageNums: imageNumList,
        urls:      urlList,
        captions:  captionList
    });
})
router.get('/page4', function(req, res, next){
    res.render('top_parts', {
        title:     'page4',
        names:     nameList,
        images:    imageList,
        imageNums: imageNumList,
        urls:      urlList,
        captions:  captionList
    });
})
router.get('/movie/page1', function(req, res, next) {
    res.render('movie_show', {
        title: 'page1'
    });
});
router.get('/movie/page2', function(req, res, next) {
    res.render('movie_show', {
        title: 'page2'
    });
});
router.get('/movie/page3', function(req, res, next) {
    res.render('movie_show', {
        title: 'page3'
    });
});

module.exports = router;
