var React = require('react');

var Item = React.createClass({
  getMovies: function() {
    window.open(this.props.videoId,"popup","width=700,height=450");
  }, 

  render: function() {
    return (
    	
      <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}} >
        <div className="overlay">
          <div className="title">{this.props.title}</div> 

          <button onClick={this.getMovies} id="getMovies" type="button" >
            Play
          </button>
          <ListToggle />   
        </div>
      </div>
    );
  }
});

var ListToggle = React.createClass({
 render: function() {
    return (
      <button id="toggle" type="button" >
        Add
      </button>
      
    );
  }
})


module.exports = Item;
