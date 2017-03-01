

// var http = require('http');

// // Send index.html to all requests
// var app = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end("hello user!!");
// });

// app.get('/clientaws', function(req, res){
//   res.sendFile(__dirname + '/client');
// });

// // Socket.io server listens to our app
// var io = require('socket.io').listen(app);

// io.on('connection', function(socket){

// 	console.log("user is coneected"+ socket.id);

// socket.on('join',function(uname){

// 	//clients=uname;
// });	
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg,socket.id);
//   });

//   socket.on("disconnect",function(){

//   		console.log("use disconnected");
//   });
// });
// app.listen(8081, '172.31.18.133');


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket){
   console.log('connection');

  socket.on('CH01', function (from, msg) {
    console.log('MSG', from, ' saying ', msg);
  });

});

http.listen(8081, '172.31.18.133', function () {
  console.log('listening on *:8081 172.31.18.133');
});
