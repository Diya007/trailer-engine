var actions = require('../actions/index');
//var combineReducers = require('redux').combineReducers;

var initialState = {
	movies:[],
	currentUser: null,
	items:[]
	
}



var resultsReducer = function(state, action) {
	state = state || initialState;

	switch (action.type) {
		case 'FETCH_YOUTUBE_SUCCESS':
		// 	return action.items;
		// default:
		// 	return state;

			return Object.assign({}, state, {items: action.payloadItems})
			default:
				return state;

		case "LOGIN_SUCCESSFUL":
			return Object.assign({}, state, {currentUser: action.payloadUsername});
		
	}
}

// exports.resultsReducer = combineReducers({
// 	items: resultsReducer
// })

exports.resultsReducer = resultsReducer;