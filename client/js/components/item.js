var React = require('react');
var connect = require('react-redux').connect;
var ListToggle = require('./list-toggle');


var Item = React.createClass({
  getMovies: function() {
    window.open(this.props.videoId,"popup","width=700,height=450");
    var movieTitle = this.props.title;
    
  }, 

  render: function() {
    return (
    	
      <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}} >
        <div className="overlay">
          <div className="title">{this.props.title}</div> 

          <button onClick={this.getMovies}  id="getMovies" type="button" >
            Play
          </button>

          <ListToggle movieTitle={this.props.title}/>   
        </div>
      </div>
    );
  }
});


module.exports = Item;
