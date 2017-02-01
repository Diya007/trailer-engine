var React = require('react');

var Item = React.createClass({
  getMovies: function() {
    window.open(this.props.videoId,"popup","width=700,height=450");
    var movieTitle = this.props.title;
    console.log(this.props.title)
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

var ListToggle = React.createClass({
  addMovie: function() {
      //this.props.dispatch(actions.addMovies(movieTitle));
      var movieTitle = this.props.movieTitle;
      console.log(this.props.movieTitle)
  },

  render: function() {
    return (
      <button  onClick={this.addMovie}  id="toggle" type="button" >
        Add
      </button>
      
    );
  }
})


module.exports = Item;
