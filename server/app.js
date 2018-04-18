const express = require('express')
const app = express()

app.get('*', (req,res,next) =>{
	res.send('Hello')
})

app.listen(3001, (req, res, next) =>{
	console.log('Listening on 3001')
})