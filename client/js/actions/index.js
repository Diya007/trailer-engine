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
			dispatch({type: 'FETCH_YOUTUBE_SUCCESS', items:items});
		})
		.catch(function(err) {
			console.log('there has been an error', err);
		})
	}
};

var registerRequest = function(username) {
	return function(dispatch) {
		console.log(username)
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
			console.log(response)
			return response.json();
		})
		.then(function(data) {
			console.log(data)
			console.log('route works')
			//dispatch(loginRequest(username))
		})
		.catch(function(err) {
			console.log('there has been an error', err)
		})
	}
}

exports.fetchResults = fetchResults;
exports.registerRequest = registerRequest;