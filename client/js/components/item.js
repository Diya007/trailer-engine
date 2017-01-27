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
	// getInitialState: function() {
 //    return({ toggled: false })
 //  },
 //  handleClick: function() {
 //    if(this.state.toggled === true) {
 //      this.setState({ toggled: false });
 //    } else {
 //      this.setState({ toggled: true }); 
 //    }
    
 //  },
  render: function() {
    return (
      <h1>toggle</h1>
    );
  }
})


module.exports = Item;
