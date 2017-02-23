var React = require('react');

var Hero = React.createClass({
  render: function() {
    return (
      <div id="hero" className="Hero" style={{backgroundImage: 'url(https://static.pexels.com/photos/27008/pexels-photo-27008.jpg)'}}>
        
        <div className="content">

          {/*<div> 
            <img className="logo" src="http://findicons.com/files/icons/760/hand_drawing/256/movie.png" alt="narcos background" />
          </div> */}
          
          <div className="title">
            <h2>Now available</h2>
          </div>

          <p>Stay tuned for the latest movie trailers and previews.
          Search for a movie name, click "Play" to watch or add it into your favorite list.</p>

          <div className="button-wrapper">
            <HeroButton primary={true} text="Watch trailor now" /> 
          </div>

        </div>

        <div className="overlay"></div>

      </div>

    );
  }
})

// Hero Button
var HeroButton = React.createClass({
  render: function() {
    return (
      <a className="Button" href={'https://www.youtube.com/watch?v=frdj1zb9sMY'} target="_blank" data-primary={this.props.primary}>{this.props.text}</a>
    );
  }
})

module.exports = Hero;