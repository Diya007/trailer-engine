var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Movie = require('./movie');

var UserSchema = new mongoose.Schema({ 
        username: String,
        movies: [{
        	type: Schema.Types.ObjectId,
        	ref: 'Movie'
        	//User.movies.title // print out Movie.title
        }]
      
});


module.exports = mongoose.model('User', UserSchema);