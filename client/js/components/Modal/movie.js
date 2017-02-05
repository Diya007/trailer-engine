var React = require('react');

// this is where queue format is 

var Movie = React.createClass({

	render: function() {
		return(
			<div className="Movie">
				{this.props.title}
			</div>
		)		
	}
})

module.exports = Movie;