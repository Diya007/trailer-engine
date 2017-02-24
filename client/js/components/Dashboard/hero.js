var React = require('react');

var Hero = React.createClass({
  render: function() {
    return (
      // 
      <div id="hero" className="Hero" style={{backgroundImage: 'url(/assets/images/background.jpg)'}}>
        
        <div className="content">  

          <div className="title">
            <h2> The world is like a big circus, it makes you excited, is let I fear, 
            because I know that after the dismissal is always - limited tenderness, infinite grief.</h2>
            <h3> ── Chaplin</h3>
          </div>
          <p>
            Stay tuned for the latest movie trailers and previews.
          </p> 

          {/*<div className="movieFrame"></div>}*/}

        </div>

        <div className="overlay"></div>
      </div>
    );
  }
})




module.exports = Hero;