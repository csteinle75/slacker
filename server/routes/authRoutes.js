const express = require('express')
const router = express.Router()
const conn = require('../lib/conn')
const sha1 = require('sha1')
const jwt = require('jsonwebtoken')
const config = require('config')

router.post('/register', (req, res, next) => {
	const checkName = `
		SELECT count(1) as count FROM users WHERE username = ?
	`

	const username = req.body.username

	conn.query(checkName, [username], (err, results, fields) =>{
		if(results[0].count > 0){
			
			res.status(409).json({message: 'Username already in use'})

		} else {
			
			const token = jwt.sign({username: username}, config.get('jwt-secret'))

			const registerUser = `
				INSERT INTO users (username, password) VALUES (?,?)
			`
			conn.query(registerUser, [req.body.username, sha1(req.body.password)], (err, results, fields) =>{
				res.json({
					message: 'user sucessfully registered',
					token: token
				})
			})
		}
	})
})

router.post('/token', (req, res, next) =>{
	console.log('request: ', req.body)
	const username = req.body.username ? req.body.username : ''
	const password = req.body.password ? req.body.password : ''
	

	const loginSql = `
		SELECT * FROM users WHERE username = ? AND password = ?
	`

	conn.query(loginSql, [username, sha1(password)], (err,results,fields) =>{
		console.log(results)
		if(results.length > 0){
			const token = jwt.sign({username: username}, config.get('jwt-secret'))

			res.json({
				token: token
			})
			
		} else {
			res.status(401).json({
				message: "Bad username or password"
			})
		}
	})
})

module.exports = router