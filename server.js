//var app = require('express')();

//var httpio=http.Server(app);
//var io = require('socket.io')(httpio);



// app.get('/', function(req, res){
//   res.sendFile('/Users/maansoftwares-02/Desktop/latest/chat/testingpart2/simple.html');
// });
//var clients;




// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });



//var http1 = require('http');
var http = require('http');
var io=require('socket.io')(http);
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8081, '172.31.18.133');
console.log('Server running at http://APP_PRIVATE_IP_ADDRESS:8080/');



// console.log("hey user you are most welcome!!!");
// io.on('connection', function(socket){

// 	console.log("user is coneected"+ socket.id);

// socket.on('join',function(uname){

// 	clients=uname;
// });	
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg,clients,socket.id);
//   });

//   socket.on("disconnect",function(){

//   		console.log("use disconnected");
//   });
// });