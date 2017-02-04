var actions = require('../actions/index');
//var combineReducers = require('redux').combineReducers;

var initialState = {
	//movies:[],
	currentUser: null,
	items:[],
	loginError: null,
	fetchedMovieLists:[]

}


var resultsReducer = function(state, action) {
	state = state || initialState;

	switch (action.type) {
		case 'FETCH_YOUTUBE_SUCCESS':
			return Object.assign({}, state, {items: action.payloadItems})
			default:
				return state;

		case 'LOGIN_SUCCESSFUL':
			return Object.assign({}, state, {currentUser: action.payloadUsername, loginError: null});

		case 'LOGIN_FAIL':
			return Object.assign({}, state, {loginError: action.payloadError});

		case 'FETCH_MOVIES_SUCCESSFULLY':
			console.log('this is from fetchMovies' ,action);
			return Object.assign({}, state, {fetchedMovieLists: action.payloadMovieList});

	}
}

// exports.resultsReducer = combineReducers({
// 	items: resultsReducer
// })

exports.resultsReducer = resultsReducer;