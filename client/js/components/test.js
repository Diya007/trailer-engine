var React = require('react');

module.exports = React.createClass({
	handleClick: function(){
		alert()
	},
	render:function() {
		return (
			<div>
				<h1>Isn't this amazing </h1>
				<button onClick={this.handleClick}>Click me </button>
			</div>
				
		)
	}
})