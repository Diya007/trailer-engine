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
			console.log(items)
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
		console.log('hello')
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
			console.log('response',response)
			return response.json();
			// return response.json().then(function(json) {
			// 	return {json: json, response: response};
			// })
		})
		.then(function(response) {
			if(response.ok === false) {
				return Promise.reject(json);
			}

		})
		.then(function(data) {
				dispatch(loginRequest(username));
			},
		)
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
			console.log(response)
			return response.json()
		})
		.then(function(data) {
			console.log(data)
			dispatch(loginSuccessful(data.username))			
		})

	}
}

var LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
var loginSuccessful = function(username) {
	// return function(dispatch) {
	// 	return fetch('/').then
	// }
	return{
		type: LOGIN_SUCCESSFUL,
		payloadUsername: username
	}
	
}

// need LOGIN_FAIL CASE 
// need post request to add movies ???
//点击主页username来fetch movie lists.
var FETCH_MOVIES = 'FETCH_MOVIES';
var fetchMovies = function(currentUser) {
	return function(dispatch) {
		return fetch('/users/'+currentUser+'/movies').then(function(response) {
			return response.json()
		})
		.then(function(data) {
			return console.log(data)
		})
	}
}

var addMovies = function(movieTitle) {
	return function(dispatch, getState) {
		//function(dispatch, getState) {
		// where is currentUser come from?
		// if current user is null, error message 
		var currentUser = getState().currentUser;
		console.log(currentUser);
		return fetch('/movie-list/'+currentUser+'/movies', {
	    	method: 'POST',
	    	headers: {
		        'Content-Type': 'application/json'
	      	},
		    body: JSON.stringify({
		    	movieTitle: movieTitle
      		})
		})
		.then(function(response) {
			console.log(response)
			return response.json()
		})
		.then(function(response) {
			if(response.ok === false) {
				return Promise.reject(json);
			}

		})
		.then(function(data) {
			console.log(data)
		})
		.catch(function(err) {
			dispatch(registerError);
			console.log('there has been an error', err)
			//add dispatch registerError 
		})
	}
}




exports.fetchResults = fetchResults;
exports.registerRequest = registerRequest;
exports.addMovies = addMovies;