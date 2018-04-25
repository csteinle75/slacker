const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const bodyParser = require('body-parser')
const config = require('config')
const jwt = require('express-jwt')

const app = express()
const server = http.Server(app)
const io = socketio(server)

//routes
const authRoutes = require('./routes/authRoutes')
const protectedRoutes = require('./routes/protectedRoutes')

app.use(bodyParser.json())

server.listen(3001)

io.on('connection', (socket) =>{
	socket.on('message', data => {
		io.emit('message', data)
	})
})

app.use('/api', authRoutes)
app.use('/api', jwt({secret: config.get('jwt-secret')}), protectedRoutes)

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