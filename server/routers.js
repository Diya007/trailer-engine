express = require('express'); 
var profileRouter = express.Router(); 
	
var  User = require('./models.js');

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




module.exports = profileRouter;