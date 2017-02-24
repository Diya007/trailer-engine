var React = require('react');
var ReactPlayer = require("react-player");

var PlayVideo = React.createClass({
	render: function() {
		return (
			<ReactPlayer url={this.props.url}  playing />
		)
	}

})

module.exports = PlayVideo;