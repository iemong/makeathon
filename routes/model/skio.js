var app = require('../../app');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var final_msg = [];
function skio() {
  // Socket.IO
 http.listen(app.get('port'), function() {
      console.log('listening!!!');
  });

 io.on('connection', function(socket){

        socket.on('message_from_client', function(msg){
            io.emit('message_from_server', msg);
            final_msg = JSON.parse(JSON.stringify(msg));;
        });
        socket.on('load', function(msg){
            io.emit('last_massage', final_msg);
        })
  });

}

module.exports = skio;
