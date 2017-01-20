import 'babel-polyfill';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var store = require('./store');

var App = require('./components/App');

document.addEventListener('DOMContentLoaded', function(){
	ReactDOM.render(
		<Provider store = {store}>
			<App />
		</Provider>,
		document.getElementById('app')
	);
})
