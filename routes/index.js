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
router.get('/device1', function(req, res, next){
    res.render('top_parts', {
        title:     'device1',
        names:     nameList,
        images:    imageList,
        imageNums: imageNumList,
        urls:      urlList,
        captions:  captionList
    });
})
router.get('/device2', function(req, res, next){
    res.render('top_parts', {
        title:     'device2',
        names:     nameList,
        images:    imageList,
        imageNums: imageNumList,
        urls:      urlList,
        captions:  captionList
    });
})
router.get('/device3', function(req, res, next){
    res.render('top_parts', {
        title:     'device3',
        names:     nameList,
        images:    imageList,
        imageNums: imageNumList,
        urls:      urlList,
        captions:  captionList
    });
})
router.get('/device4', function(req, res, next){
    res.render('top_parts', {
        title:     'device4',
        names:     nameList,
        images:    imageList,
        imageNums: imageNumList,
        urls:      urlList,
        captions:  captionList
    });
})
// router.get('/device5', function(req, res, next){
//     res.render('top_parts', {
//         title:     'device5',
//         names:     nameList,
//         images:    imageList,
//         imageNums: imageNumList,
//         urls:      urlList,
//         captions:  captionList
//     });
// })
router.get('/movie/device1', function(req, res, next) {
    res.render('movie_show', {
        title: 'device1'
    });
});
router.get('/movie/device2', function(req, res, next) {
    res.render('movie_show', {
        title: 'device2'
    });
});
router.get('/movie/device3', function(req, res, next) {
    res.render('movie_show', {
        title: 'device3'
    });
});
router.get('/movie/device4', function(req, res, next) {
    res.render('movie_show', {
        title: 'device4'
    });
});

module.exports = router;
