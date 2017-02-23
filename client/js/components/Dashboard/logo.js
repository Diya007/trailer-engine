var React = require('react');

var Logo = React.createClass({
  render: function() {
    return (
      <div id="logo" className="Logo">
      	<div className="logo-img">
        	<a href="#">
        		<img className="logo" src="https://cdn4.iconfinder.com/data/icons/IMPRESSIONS/multimedia/png/256/video.png" alt="narcos background" />
        	</a>

        </div>
       	<div className="logo-title">Trailer Engine</div>
      </div>
    );
  }
});

module.exports = Logo;