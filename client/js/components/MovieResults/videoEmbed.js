var React = require('react');
var ReactPlayer = require("react-player");

var PlayVideo = React.createClass({
	render: function() {
		return (
			
			<ReactPlayer className="player"  url={this.props.url}  height={200} playing />
			
		)
	}

})

module.exports = PlayVideo;