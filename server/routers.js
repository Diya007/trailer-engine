var express = require('express'); 
// var profileRouter = express.Router(); 
var profileRouter = express.Router();
var bodyParser = require('body-parser');


var jsonParser = bodyParser.json();
//profileRouter.use(bodyParser.urlencoded({extended:true}));	
//profileRouter.use(bodyParser.json());
var  User = require('./models.js');


var React = require('react');
var ReactDOMServer = require('react-dom/server');


	profileRouter.post('/register',jsonParser, function(req, res){


		console.log(req.body)
		if(!req.body.username) {
			return res.status(400).json({
				message: 'missing username'
			})
		}

		var user = new User (
		    {username: req.body.username}
			
		)
		// user.save(function(err) {
		// 	if (err)
		// 	{return res.json(err)}
		// 	return res.status(201).json({user})
		// })
		return res.status(202).json({user})
			console.log(user)
		})
	
		// if(!req.body) {
		// 	return res.status(400).json({
		// 		message: 'No request body'
		// 	});
		// }

		// if(!('email' in req.body)) {
		// 	return res.status(422).json({
		// 		message: 'Missing email'
		// 	})
		// }

		// var email = req.body.email;
		// console.log(req.body)

		// if(typeof email !== 'string') {
		// 	return res.status(422).json({
		// 		message: 'incorrect field type: username'
		// 	})
		// }

		// var user = new User({
		// 	email: email,
		// 	moives:[]
		// })

		// console.log(user);




module.exports = profileRouter;