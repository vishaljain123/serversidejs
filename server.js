var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


alert("hey!!user");
// app.get('/', function(req, res){
//   res.sendFile('/Users/maansoftwares-02/Desktop/latest/chat/testingpart2/simple.html');
// });
var clients;


console.log("hey user you are most welcome!!!");
io.on('connection', function(socket){

	console.log("use is coneected"+ socket.id);

socket.on('join',function(uname){

	clients=uname;
});	
  socket.on('chat message', function(msg){
    io.emit('chat message', msg,clients,socket.id);
  });

  socket.on("disconnect",function(){

  		console.log("use disconnected");
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
