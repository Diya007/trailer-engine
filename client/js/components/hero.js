var React = require('react');

var Hero = React.createClass({
  render: function() {
    return (
      <div id="hero" className="Hero" style={{backgroundImage: 'url(https://cnet4.cbsistatic.com/img/GI2nG6M4Ds47lWV6_Jazb2x0r_o=/670x503/2016/10/13/19c3a6ab-bd62-43a9-8df1-bd7a17b8f720/rogueoneposter2.jpg)'}}>
        <div className="content">
          <img className="logo" src="http://vignette3.wikia.nocookie.net/starwars/images/e/ef/Rogue_One_Logo.png/revision/latest?cb=20150930192529" alt="narcos background" />
          <h2>Now available</h2>
          <p>The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting up the epic saga to follow.</p>
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
