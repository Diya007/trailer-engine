express = require('express'); 

// import express from 'express';
var profileRouter = express.Router(); 
//const bodyParser = require('body-parser');
//import mongoose from 'mongoose';
//const {User} = require('./models');	
var  User = require('./models.js');
//const app = express();

	profileRouter.post('/register', function(req, res){
		//console.log('hello')
		if(req.body.email) {
			const newUser = User.create(req.body.email, []);
			return res.status(200).json(newUser);
		}
		else{
			const message = 'Missing email' ;
			return res.status(400).send(message);
		}

	});

	// app.get('/', function(req, res) {
	// 	console.log('hello get works')
	// })



module.exports = profileRouter;