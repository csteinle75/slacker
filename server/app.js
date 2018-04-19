const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.Server(app)
const io = socketio(server)


server.listen(3001)

io.on('connection', (socket) =>{
	socket.on('message', data => {
		io.emit('message', data)
	})
})


// var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// server.listen(80);

// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });



// app.get('*', (req,res,next) =>{
// 	res.send('Hello')
// })

// app.listen(3001, (req, res, next) =>{
// 	console.log('Listening on 3001')
// })