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
                return res.status(201).location('/users/' + user._id).json({});
                // return res.status(201).location('/users/' + user.username).json({});
            });

	})

	//why we need usre name and user_id????
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

	profileRouter.post('/users/:username/movies', function(req, res) {
		var routerUsername = req.params.username;
		var movieTitle = req.body.movieTitle;
		var authUsername = req.user.username.toString();
		var id = req.user._id.toString();

		Movie.creat({title: movieTitle, _user: id}, function(err, movie) {
			if(err) {
            	return res.sendStatus(500);
        	}
        	if(routerUsername !== authUsername) {
        		return res.status(401).json({message: 'unauthorized'})
        	}

        	return res.status(201).location('/users/' + authUsername + "/movies/" + movie._id).json({movieId: movie._id})

		})

	})




	profileRouter.get('/users/:username:/movies', function(req, res) {
		console.log(req.params.username);
		res.send('hello, the post movies route works')
	})
	





module.exports = profileRouter;