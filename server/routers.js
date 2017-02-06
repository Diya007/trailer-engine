var express = require('express'); 
// var profileRouter = express.Router(); 
var profileRouter = express.Router();
var bodyParser = require('body-parser');


var jsonParser = bodyParser.json();
//profileRouter.use(bodyParser.urlencoded({extended:true}));	
//profileRouter.use(bodyParser.json());
var User = require('./models/user.js');
var Movie = require('./models/movie.js')

var React = require('react');
var ReactDOMServer = require('react-dom/server');

	profileRouter.post('/register',jsonParser, function(req, res){
		if(!req.body.username) {
			return res.status(400).json({
				message: 'missing username'
			})
		}
		var username = req.body.username;
		if(typeof username !== 'string') {
			return res.status(422).json({
            	message: 'Incorrect field type: username'
        	});
		}
		username = username.trim();

		if (username === '') {
	        return res.status(422).json({
	            message: 'Incorrect field length: username'
	        });
    	}	

    	// User.findOne({
    	// 	username: username
    	// })
    	User.findOne({username: username }, function(err, user) {
    		if(err) {
    			console.log(err)
    			return res.status(500).json({
    				message:'Internal server error'
    			})
    		}	
    		console.log('this is the user I find', user)
    		return res.status(201).json({}); 

    		var user = new User (
		    	{username: username}
			
			);
		
			user.save(function(err) {
	                if (err) {
	                    return res.status(500).json({
	                        message: 'Internal server error'
	                    });
	                }
	                console.log('Username created');
	                return res.status(201).json({});
	                // return res.status(201).location('/users/' + user.username).json({});
	        });

    	});

	})

	//why we need usre name and user_id???? user is from passport, which i don't use.
	// for loginRequest  in actions
	profileRouter.get('/users/:username', function(req, res) {
		var routerUsername = req.params.username;

	    User.findOne({username: routerUsername}, function(err, user){
	       if(err) {
	           return res.status(500).json({
	               message: 'Internal Server Error'
	           });
	       }
	       console.log(user)
	       //console.log(req.user)
	       res.status(200).json({"._id": user._id, "username": user.username})
	    });

	})

	profileRouter.post('/movie-list/:username/movies', function(req, res) {
		var routerUsername = req.params.username;
		var movieTitle = req.body.movieTitle;
	
		Movie.create({title: movieTitle, _user: routerUsername}, function(err, movie) {
			if(err) {
            	return res.sendStatus(500);
        	}

        	if (routerUsername.toString() === "null" ) {
				 return res.status(401).json({message: "Unauthorized"});
			}
        	return res.status(201).json({movieId: movie._id})
        	//return res.status(201).location('/movie-list/' + routerUsername + '/movies/' + movie._id).json({movieId: movie._id})
		})	

	})

	// fetchMovie action
	profileRouter.get('/movie-list/:username/movies', function(req, res) {
		var routerUsername = req.params.username;
		console.log('routerUsername', routerUsername);

		Movie.find({_user: routerUsername}, function(err, movies) {
			if (err) {
				return res.status(err);
			}
			return res.status(200).json(movies)
		})
		// User.find({username:routerUsername}, function(err, user) {
		// 	if (err) {
		// 		return res.status(err);
		// 	}
		// 	return res.status(200).json(user)
		// })
	})
	





module.exports = profileRouter;