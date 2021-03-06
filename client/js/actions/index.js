require('isomorphic-fetch');

var fetchResults = function(term) {
	return function(dispatch) {
		var apiKey = 'AIzaSyBlpPh_6snu64y_Q2O7OAubiS2DSM1hWZY';
		var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+term+'trailer&key='+apiKey;
		return fetch(url).then(function(response) {
			if(response.status <200 || response.status >=300) {
				var error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response;
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			var items = data.items;
			dispatch(fetchYoutube(items));
		})
		.catch(function(err) {
			console.log('there has been an error', err);
		})
	}
};

var FETCH_YOUTUBE_SUCCESS = 'FETCH_YOUTUBE_SUCCESS';
var fetchYoutube = function(items) {
	return {
		type: FETCH_YOUTUBE_SUCCESS,
		payloadItems: items
	}
	
}

var registerRequest = function(username) {

	return function(dispatch) {
		return fetch('/register', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
  				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username
			})
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			dispatch(loginRequest(data.user.username));
		})
		.catch(function(err) {
			dispatch(registerError);
			console.log('there has been an error', err)
			//add dispatch registerError 
		})
	}
}

var REGISTER_ERROR = 'REGISTER_ERROR';
var registerError = function(error) {
	return {
		type: REGISTER_ERROR,
		payload: error
	};
}

var loginRequest = function(username) {
	return function(dispatch) {
		return fetch('/users/'+username).then(function(response) {
			return response.json()
		})
		.then(function(data) {
			dispatch(fetchMovies(data.username));
			dispatch(loginSuccessful(data.username));	
		})
	}
}

var LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
var loginSuccessful = function(username) {
	return {
		type: LOGIN_SUCCESSFUL,
		payloadUsername: username
	}
	
}

var LOGIN_FAIL = 'LOGIN_FAIL';
var loginFail = function(error) {
	return {
		type: LOGIN_FAIL,
		payloadError: error
	}
}

//点击主页username来fetch movie lists.
var FETCH_MOVIES = 'FETCH_MOVIES';
var fetchMovies = function(currentUser) {
	return function(dispatch) {
		return fetch('/movie-list/' + currentUser + '/movies').then(function(response) {
			return response.json()
		})
		.then(function(data) {
			return dispatch(fetchMoviesSuccessfully(data));
		})
		.catch(function(err) {
			console.log('fetch movies failed', err);
		})
	}
}

var FETCH_MOVIES_SUCCESSFULLY = 'FETCH_MOVIES_SUCCESSFULLY';
var fetchMoviesSuccessfully = function(movieList) {
	return {
		type: FETCH_MOVIES_SUCCESSFULLY,
		payloadMovieList: movieList
	}	
}

var ADD_MOVIES = 'ADD_MOVIES';
var addMovies = function(movieItem) {
	return function(dispatch, getState) {
		var currentUser = getState().currentUser;	
		return fetch('/movie-list/' + currentUser + '/movies', {
	    	method: 'POST',
	    	headers: {
		        'Content-Type': 'application/json'
	      	},
		    body: JSON.stringify({
		    	movieTitle: movieItem.snippet.title,
		    	movieId: 'https://www.youtube.com/watch?v='+movieItem.id.videoId,
		    	movieThumbnail: movieItem.snippet.thumbnails.medium.url
      		})
		})
		.then(function(response) {
			if(response.status == 401) {
				dispatch(loginFail(response.statusText));
			}
			return response.json()
		})
		.then(function(data) {
			dispatch(fetchMovies(currentUser))
		})
		.catch(function(err) {
			dispatch(addMoviesError(err));
			console.log('there has been an error', err)
			//add dispatch registerError 
		})
	}
}

var ADD_MOVIES_ERROR = 'ADD_MOVIES_ERROR';
var addMoviesError = function(error) {
		return {
			type: ADD_MOVIES_ERROR,
			payload: error
		}
}
//delete movie from list and user database 
var DELETE_MOVIE = 'DELETE_MOVIE';
var deleteMovie = function(movieId) {
	return function(dispatch, getState){
		var currentUser = getState().currentUser;
		return fetch('/movie-list/' + currentUser + '/movies/' + movieId, {
			method: 'DELETE',
			headers: {
				'Content-Type' : 'application/json'
			}

		})
		.then(function(response) {
			return response.json()
		})
		.then(function(data) {
			dispatch(fetchMovies(currentUser));
		})
	}
}


exports.deleteMovie = deleteMovie;
exports.LOGIN_SUCCESSFUL = LOGIN_SUCCESSFUL;
exports.LOGIN_FAIL = LOGIN_FAIL;
exports.fetchResults = fetchResults;
exports.fetchMoviesSuccessfully = fetchMoviesSuccessfully;
exports.registerRequest = registerRequest;
exports.addMovies = addMovies;
exports.FETCH_MOVIES_SUCCESSFULLY = FETCH_MOVIES_SUCCESSFULLY;