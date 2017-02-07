var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../../actions/index.js');

var Logout = React.createClass({
	fetchUsername: function() {
		console.log('logout button ')

	},
	render: function() {
		return (
			<div className="Logout"> 

			<button id="logout" onClick={this.fetchUsername}>Logout</button> 
			</div>

		)
	}
})


//{this.state.show ? <button id="login" onClick={this.fetchUsername}>Login</button> : null} 